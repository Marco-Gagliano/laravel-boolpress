<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('posts', 'Api\PageController@index');

Route::namespace('Api')
       ->prefix('posts')
       ->group(function(){
            Route::get('/', 'PageController@index');
            Route::get('/{slug}', 'PageController@show');
            Route::get('/post-category/{slug}', 'PageController@getPostsByCategory');
            Route::get('/post-tag/{slug}', 'PageController@getPostsByTag');

    });
