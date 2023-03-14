<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->input('search');
        $page = $request->input('page', 1);
        $status = $request->input('status');
        $perPage = 20;
        $offset = ($page - 1) * $perPage;


        if (!empty($status)) {
            $people = Person::query()
                ->where('status_id', '=', $status)
                ->offset($offset)
                ->limit($perPage)
                ->get();
        }
        if (empty($status)) {
            $people = Person::query()
                ->where('name', 'LIKE', $search . '%')
                ->offset($offset)
                ->limit($perPage)
                ->get();
        }

        // $people = Person::query();
        // if (!empty($status)) {
        //     $people->where('status_id', '=', $status);
        // }
        // if (empty($status)) {
        //     $people->where('name', 'LIKE', $search . '%');
        // }
        // dd($people->get());
        // $people->offset($offset);
        // $people->limit($perPage);
        // $people->get();





        return $people;
    }
}
