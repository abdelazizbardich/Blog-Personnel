<?php


// Routes

// api
Route::post('/api/articel/add/{key}',function($key){
    header('content-type: application/json; charset=utf-8');
    // calling the controller
    return Route::controller("article","add");
});