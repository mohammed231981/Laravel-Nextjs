<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Events\RealTimeMessage;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
   
event(new RealTimeMessage('Hello World! I am an event'));
    return view('welcome');
});


