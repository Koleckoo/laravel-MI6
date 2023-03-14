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
        $perPage = 20;
        $offset = ($page - 1) * $perPage;

        $people = Person::query()
            ->where('name', 'LIKE', $search . '%')
            ->offset($offset)
            ->limit($perPage)
            ->get();

        return $people;
    }
}
