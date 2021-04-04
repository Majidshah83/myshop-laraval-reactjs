<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('register',[Usercontroller::class,'register']);
Route::post('login',[Usercontroller::class,'login']);
// Route::get("user",[Usercontroller::class,'list']);
Route::get("user",[Usercontroller::class,'index']);
Route::post("addproduct",[ProductController::class,'addprodcut']);
Route::get("productlist",[ProductController::class,'productList']);
Route::delete("delete/{id}",[ProductController::class,'delete']);
Route::post("updateproduct/{id}",[ProductController::class,'updatebyid']);
// Route::get("getproduct/{id}",[ProductController::class,'getbyproduct']);
Route::get("getproduct/{id}",'ProductController@getbyproduct');
Route::get('search/{key}','ProductController@search');