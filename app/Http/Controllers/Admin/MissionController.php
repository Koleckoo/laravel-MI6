<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function edit($mission_id)
    {
        $mission = Mission::findOrFail($mission_id);

        return view('admin.missions.edit', compact('mission'));
    }

    public function save(Request $request, $mission_id = null)
    {
        //dd($request->all());
        //dd($request->input('people', []));;
        $mission = Mission::findOrFail($mission_id);
        $mission->name = $request->input('name');
        $mission->year = $request->input('year');
        $mission->outcome = $request->input('outcome');
        $mission->save();

        $mission->people()->sync($request->input('people', []));

        $mission->load('people');


        session()->flash('success_message', 'Mission info successfully updated');

        return redirect()->route('homepage');
    }
}
