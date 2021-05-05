<?php


// Routes


Route::get('/api/home',function(){
    return Route::view("welcome");
});