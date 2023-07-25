<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\SignupController;
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



Route::post('/register',[SignupController::class,'register']);
Route::post('/login',[LoginController::class,'login']);


Route::middleware('auth:api')->group(function(){
    Route::resource('/services',ServicesController::class);
    Route::post('/logout',[LogoutController::class,'logout']);
});
