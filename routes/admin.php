<?php

use App\Http\Controllers\Admin\MissionController;
use Illuminate\Support\Facades\Route;


Route::get('admin/missions/{missions_id}', [MissionController::class, 'edit']);

Route::post('admin/missions/{missions_id}', [MissionController::class, 'save']);
