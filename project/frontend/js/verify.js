import axios from "axios"; axios.defaults;
import {checkEmailValue,desAlert} from "./functions";
$(document).ready(function(){
    $("#verify").submit(function(e){
        e.preventDefault();
        let email = $(this).find('input[name="email"]').val();
        $(this).find('input[name="email"]').parent(".form-group").find(".alert").remove();
        if(!checkEmailValue(email)){
            $(this).find('input[name="email"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">L'e-mail n'est pas correct, veuillez saisir une adresse e-mail valide.</small>`);
            return false;
        }
        axios.get("http://localhost/Blog-Personnel/project/backend/api/admin/verify/"+email,{}).then((response)=>{
            if(response.data.state == 200){
                desAlert("success","l'email a été envoyé",1500);
                $('.form-alert').html(`Nous avons envoyé un lien de récupération de mot de passe directement dans votre boîte e-mail, si vous n'avez pas reçu l'e-mail, cliquez sur <span class="text-primary">Renvoyer l'e-mail</span>`);
                $('.form-alert').addClass("alert-success alert");
                $(this).find('input[name="email"]').val("");
                $(this).find('button[type="submit"]').text("Renvoyer");
            }else{
                $(this).find('input[name="email"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">L'e-mail n'est pas correct, veuillez saisir une adresse e-mail valide.</small>`);

            }
        });
    });
});