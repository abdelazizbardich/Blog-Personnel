<?php

require "./models/admin.model.php";

class adminController extends controller{

    public function login(){
        if(isset($_POST['email']) && isset($_POST['password'])){
            $admin = new Admin();
            $admin = $admin->findBy("email",$_POST['email']);
            if($admin){
                if(password_verify($_POST['password'],$admin->password)){
                    $token = generateToken([
                        "id" => $admin->id,
                        "email" => $admin->email,
                    ]);
                    $responce = [
                        "state" => 200,
                        "msg" => "success",
                        "data" => [
                            "token" => $token
                        ]
                    ];
                    $_SESSION['id'] = $admin->id;
                    $_SESSION['email'] = $admin->email;
                }else{
                    $responce = [
                        "state" => 403,
                        "msg" => "Access denied! Wrong password",
                        "data" => []
                    ];
                }
            }else{
                $responce = [
                    "state" => 404,
                    "msg" => "No user found!",
                    "data" => []
                ];
            }
        }else{
            $responce = [
                "state" => 403,
                "msg" => "Access denied!",
                "data" => []
            ];
        }
        echo json_encode($responce);
    }
}