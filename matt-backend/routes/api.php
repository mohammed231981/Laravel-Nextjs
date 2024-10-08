<?php

use App\Http\Controllers\ElasticsearchController;
use App\Http\Controllers\NotificationsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VerlofkaartController;
use Illuminate\Support\Facades\Broadcast;

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

require __DIR__ . '/auth.php';



Route::middleware('auth:api')->group(function () {
    // Route::get('/user', [UserController::class, 'show'])
    //     ->name('user.show');
        Route::get('/verlof/verlofkaart', [VerlofKaartController::class, 'get']);
        Route::post('/verlof/verlofkaart', [VerlofKaartController::class, 'save']);
        Route::post('/search', [ElasticsearchController::class, 'search']);
        Route::post('/notifications', [NotificationsController::class, 'store']);
Route::get('/notifications', [NotificationsController::class, 'get']);
Route::delete('/notifications', [NotificationsController::class, 'delete']);
});

Route::middleware(['auth:api', 'verified'])->group(function () {
    // Route::patch('/user', [UserController::class, 'update'])
    //     ->name('user.update');

    // Route::patch('/user/change-password', [UserController::class, 'changePassword'])
    //     ->name('user.change-password');
});

Broadcast::routes(['middleware' => ['auth:sanctum']]);


