<?php

require "./_classes/controller.php";
require "./models/article.model.php";

class articleController extends controller{
    public function index($key){
        if($key == "1234"){
            if(!empty($_POST['title']) || !empty($_POST['slug']) || !empty($_POST['content'])){
                $model = new Article();
                if($model->insert([
                    "title" => $_POST['title'],
                    "slug" => $_POST['slug'],
                    "content" => $_POST['content'],
                    "admin_id" => 1
                ])){
                    $responce = [
                        "state" => 200,
                        "msg" => "success",
                        "data" => [
                            "title" => $_POST['title'],
                            "slug" => $_POST['slug'],
                            "content" => $_POST['content']
                        ]
                    ];
                }else{
                    $responce = [
                        "state" => 500,
                        "msg" => "Server error!",
                        "data" => []
                    ];
                }
            }else{
                $responce = [
                    "state" => 401,
                    "msg" => "permition denied!",
                    "data" => []
                ];
            }
        }else{
            $responce = [
                "state" => 401,
                "msg" => "permition denied!",
                "data" => []
            ];
        }
        echo json_encode($responce);
    }
}