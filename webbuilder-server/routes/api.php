<?php

use App\Http\Controllers\Auth;
use App\Http\Controllers\Page;
use App\Http\Controllers\Section;
use App\Http\Controllers\Template;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/register', [Auth::class, 'Register']);
Route::post('/login', [Auth::class, 'Login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/pages', [Page::class, 'pages']);
    Route::post('/pages', [Page::class, 'store']);
    Route::get('/pages/{slug}', [Page::class, 'show']);
    Route::put('/pages/{slug}', [Page::class, 'update']);
    Route::delete('/pages/{slug}', [Page::class, 'destroy']);

    Route::get('/pages/{slug}/sections', [Section::class, 'index']);
    Route::post('/pages/{slug}/sections', [Section::class, 'store']);

    Route::get('/templates', [Template::class, 'templates']);
    Route::get('/templates/{slug}', [Template::class, 'show']);
});
