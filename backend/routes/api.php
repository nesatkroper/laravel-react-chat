<?php

use App\Http\Controllers\UsernameController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/add', [UsernameController::class, 'create']);
