<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\MenuController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\TopicController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\OrderdetailController;
use App\Http\Controllers\Api\ProductsaleController;
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



/*--BRAND--*/
Route::get('brand/index', [BrandController::class, 'index']);
Route::get('brand/show/{id}', [BrandController::class, 'show']);
Route::post('brand/update/{id}', [BrandController::class, 'update']);
Route::post('brand/store', [BrandController::class, 'store']);
Route::delete('brand/destroy/{id}', [BrandController::class, 'destroy']);
Route::get('brand_limit/{limit}', [BrandController::class, 'brand_limit']);
/*--Category--*/
Route::get('category/index', [CategoryController::class, 'index']);
Route::get('category/show/{id}', [CategoryController::class, 'show']);
Route::post('category/update/{id}', [CategoryController::class, 'update']);
Route::get('category_home/{limit}', [CategoryController::class, 'category_home']);
Route::post('category/store', [CategoryController::class, 'store']);
Route::delete('category/destroy/{id}', [CategoryController::class, 'destroy']);
Route::get('category/category_list/{parent_id?}/{status?}', [CategoryController::class, 'category_list']);
/*--User--*/
Route::get('user/index', [UserController::class, 'index']);
Route::post('user/login', [UserController::class, 'login']);
Route::get('user/show/{id}', [UserController::class, 'show']);
Route::post('user/update/{id}', [UserController::class, 'update']);
Route::post('user/store', [UserController::class, 'store']);
Route::delete('user/destroy/{id}', [UserController::class, 'destroy']);
Route::get('user/user_list/{parent_id?}/{status?}', [UserController::class, 'user_list']);
/*--Contact--*/
Route::get('contact/index', [ContactController::class, 'index']);
Route::get('contact/show/{id}', [ContactController::class, 'show']);
Route::post('contact/update/{id}', [ContactController::class, 'update']);
Route::post('contact/store', [ContactController::class, 'store']);
Route::delete('contact/destroy/{id}', [ContactController::class, 'destroy']);
/*--Menu--*/
Route::get('menu/index', [MenuController::class, 'index']);
Route::get('menu_list/{position}/{parent_id}', [MenuController::class, 'menu_list']);
Route::get('menu/show/{id}', [MenuController::class, 'show']);
Route::post('menu/update/{id}', [MenuController::class, 'update']);
Route::post('menu/store', [MenuController::class, 'store']);
Route::delete('menu/destroy/{id}', [MenuController::class, 'destroy']);

/*--Order--*/
Route::get('order/index', [OrderController::class, 'index']);
Route::get('order/show/{id}', [OrderController::class, 'show']);
Route::post('order/update/{id}', [OrderController::class, 'update']);
Route::post('order/store', [OrderController::class, 'store']);
Route::delete('order/destroy/{id}', [OrderController::class, 'destroy']);
/*--Productsale--*/
Route::get('productsale/index', [ProductsaleController::class, 'index']);
Route::get('productsale/show/{id}', [ProductsaleController::class, 'show']);
Route::post('productsale/update/{id}', [ProductsaleController::class, 'update']);
Route::post('productsale/store', [ProductsaleController::class, 'store']);
Route::delete('productsale/destroy/{id}', [ProductsaleController::class, 'destroy']);
Route::get('productsale_product_id/{product_id}', [ProductsaleController::class, 'productsale_product_id']);
/*--Slider--*/
Route::get('slider/index', [SliderController::class, 'index']);
Route::post('slider/store', [SliderController::class, 'store']);
Route::get('slider/show/{id}', [SliderController::class, 'show']);
Route::post('slider/update/{id}', [SliderController::class, 'update']);
Route::delete('slider/destroy/{id}', [SliderController::class, 'destroy']);
/*--Orderdetail--*/
Route::get('orderdetail/index', [OrderdetailController::class, 'index']);
Route::get('orderdetail/show/{id}', [OrderdetailController::class, 'show']);
Route::post('orderdetail/update/{id}', [OrderdetailController::class, 'update']);
Route::post('orderdetail/store', [OrderdetailController::class, 'store']);
/*--Product--*/
Route::get('product/index', [ProductController::class, 'index']);
Route::post('product/store', [ProductController::class, 'store']);
Route::get('product/show/{id}', [ProductController::class, 'show']);
Route::post('product/update/{id}', [ProductController::class, 'update']);
Route::delete('product/destroy/{id}', [ProductController::class, 'destroy']);
Route::get('product_home/{limit}/{category_id?}', [ProductController::class, 'product_home']);
Route::get('product_all/{limit}/{page?}', [ProductController::class, 'product_all']);
Route::get('product_category/{category_id}/{limit}/{page?}', [ProductController::class, 'product_category']);
Route::get('product_brand/{brand_id}/{limit}/{page?}', [ProductController::class, 'product_brand']);
Route::get('product_detail/{slug}', [ProductController::class, 'product_detail']);
Route::get('product_detail_plus/{slug}/{category_id}', [ProductController::class, 'product_detail_plus']);
Route::get('product_category_id/{category_id}', [ProductController::class, 'product_category_id']);
/*--Topic--*/
Route::get('topic/index', [TopicController::class, 'index']);
Route::get('topic/show/{id}', [TopicController::class, 'show']);
Route::post('topic/update/{id}', [TopicController::class, 'update']);
Route::post('topic/store', [TopicController::class, 'store']);
Route::delete('topic/destroy/{id}', [TopicController::class, 'destroy']);
/*--Post--*/
Route::get('post/index', [PostController::class, 'index']);
Route::get('post/show/{id}', [PostController::class, 'show']);
Route::post('post/update/{id}', [PostController::class, 'update']);
Route::post('post/store', [PostController::class, 'store']);
Route::delete('post/destroy/{id}', [PostController::class, 'destroy']);