<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {

    // 
    Route::post('/logout', [AuthController::class, 'logout']);

    // 
    Route::prefix('/user')->group(function () {
        Route::get('/', [AuthController::class, 'userProfile']);
        Route::controller(UserController::class)->group(function () {
            Route::post('/bio', 'editBio');
            Route::post('/name', 'editName');
            Route::post('/username', 'editUsername');
            Route::post('/phone', 'editPhone');
            Route::post('/dob', 'editDOB');
        });
    });

    // 
    Route::prefix('/contact')->group(function () {
        Route::controller(ContactController::class)->group(function () {
            Route::get('/{creator}', 'getContact');
            Route::get('/{member}', 'getOnlyContact');
            Route::post('/', 'createContact');
        });
    });
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');