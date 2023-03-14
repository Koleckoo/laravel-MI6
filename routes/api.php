<?php

use App\Http\Controllers\Api\PersonController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\StatusController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/search', [SearchController::class, 'search']);
Route::get('/people/{person_id}', [PersonController::class, 'show']);


Route::get('/statuses', [StatusController::class, 'index']);
