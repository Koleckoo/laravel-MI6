<?php

use App\Http\Controllers\Api\MissionController;
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

// api for people
Route::get('/search', [SearchController::class, 'search']);
Route::get('/people/{person_id}', [PersonController::class, 'show']);


Route::get('/statuses', [StatusController::class, 'index']);

Route::get('/missions', [MissionController::class, 'index']);
// get mission for showing one mission based on mission_id
Route::get('/missions/{mission_id}', [MissionController::class, 'show']);
// post route for the frontend form
Route::post('/missions/store', [MissionController::class, 'store'])->name('api.missions.store');
// route for sending email to mailtrap
Route::get('/send/test-email', [PersonController::class, 'sendThisEmail']);
// // creating api for sending the mission info
Route::get('/missions/get-details/{mission_id}', [MissionController::class, 'sendMissionDetails']);
// route for getting notification sedn
Route::get('/send/test-notification', [PersonController::class, 'sendTestNotification']);
