import axios from "axios";axios.defaults;
import { checkEmailValue,checkPasswordValue,desAlert } from "./functions"
$(document).ready(function(){
    $('#login').submit(function(e){
        e.preventDefault();
        let email = $(this).find('input[name="email"]').val();
        let password = $(this).find('input[name="password"]').val();
        let formData = $(this).serialize();
        $(this).find(".form-group").find(".alert").remove();
        if(!checkEmailValue(email)){
            $(this).find('input[name="email"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">L'e-mail n'est pas correct, veuillez saisir une adresse e-mail valide.</small>`);
            return false;
        }
        if(!checkPasswordValue(password)){
            $(this).find('input[name="password"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">Le mot de passe doit comporter au moins 8 caractères et au moins un chiffre et une lettre</small>`);
            return false;
        }
        axios({
            method: 'post',
            url: 'http://localhost/Blog-Personnel/project/backend/api/admin/login',
            data: formData
        })
        .then((response)=>{
            console.log(response);
            if(response.data.state == 200){
                window.sessionStorage.setItem('token',response.data.data.token)
                desAlert("success","Access granted",500);
                window.location.href = "./";
            }else{
                desAlert("danger",response.data.msg,2000);
            }
        })
    });
})