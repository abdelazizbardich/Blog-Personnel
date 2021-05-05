<?php


// Routes

// api
Route::post('/api/articel/add/{key}',function($key){
    // calling the controller
    return Route::controller("article","index");
});