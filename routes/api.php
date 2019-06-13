<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('app/index', 'Web\App\AppController@get');
Route::post('app/index/single', 'Web\App\AppController@getSingle');
Route::post('app/create', 'Web\App\AppController@create');
Route::put('app/update', 'Web\App\AppController@update');
Route::delete('app/destroy', 'Web\App\AppController@destroy');
