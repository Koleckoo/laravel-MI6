<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function search(Request $request)
    {

        $people = $request->input('search');

        $person = Person::query()
            ->where('name', 'LIKE', $people . '%')
            ->limit(20)
            ->get();

        return $person;
    }
}
