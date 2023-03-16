<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Mail\TestEmail;
use App\Models\Person;
use App\Models\User;
use App\Notifications\TestNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Notification;

class PersonController extends Controller
{
    public function show($person_id)
    {
        $person = Person::findOrFail($person_id)->load('image');
        return $person;
    }

    public function sendThisEmail()
    {
        $temp_var = 'this is it';
        Mail::to('test@test.com')
            ->send(new TestEmail($temp_var));
    }

    public function sendTestNotification()
    {   // find all users 
        $users = User::get();
        // dont forget to import notification from fasade and send it to all the users
        Notification::send($users, new TestNotification('hi'));
        // $user->notify(new TestNotification('hi'));
    }
}
