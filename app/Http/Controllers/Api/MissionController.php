<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\SendMissionDetails;
use App\Models\Mission;
use App\Models\User;
use App\Notifications\MissionOutcomeUpdated;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;

class MissionController extends Controller
{
    public function index()
    {
        $missions = Mission::query()
            ->with('people')
            ->get();

        return $missions;
    }

    public function show($mission_id)
    {
        $mission = Mission::with('people')->findOrFail($mission_id);

        return $mission;
    }

    public function store(Request $request)
    {
        $mission = Mission::findOrFail($request->input('id'));

        $original_outcome = $mission->outcome;

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();
        $users = User::query()
            ->where('role', 'admin')
            ->get();


        if ($original_outcome != $request->input('outcome')) {


            Notification::send($users, new MissionOutcomeUpdated($mission));
        }

        return $mission;
    }

    public function sendMissionDetails($mission_id)
    {
        // extracting mission id from the endpoint and find it in DB
        // also finding the signined user and using his email as the sender of the email
        $mission = Mission::findOrFail($mission_id);
        $user = Auth::user();
        Mail::to($user ? $user->email : 'test@test.com')
            ->send(new SendMissionDetails($mission));

        return [
            'successs_message' => 'Details sent'
        ];
    }
}
