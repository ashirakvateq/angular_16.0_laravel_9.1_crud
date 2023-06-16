<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/employees', [App\Http\Controllers\EmployeeController::class, 'getEmployees'])->name('get.employees');
Route::get('/employee/{id}', [App\Http\Controllers\EmployeeController::class, 'getEmployeeById'])->name('get.single.employee');
Route::post('/create-employee', [App\Http\Controllers\EmployeeController::class, 'createEmployee'])->name('create.employee');
Route::put('/update-employee/{id}', [App\Http\Controllers\EmployeeController::class, 'updateEmployee'])->name('update.employee');
Route::delete('/delete-employee/{id}', [App\Http\Controllers\EmployeeController::class, 'deleteEmployee'])->name('delete.employee');