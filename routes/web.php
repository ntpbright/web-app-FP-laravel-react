<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
  return view('login');
});

Route::get('/main', function () {
  return view('main');
});

Route::get('/profile', function () {
  return view('profile');
});

Route::get('/r-VL', function () {
  return view('vacation');
});

Route::get('/r-SL', function () {
  return view('sick');
});

Route::get('/r-PEL', function () {
  return view('personal');
});