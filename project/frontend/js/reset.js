import axios from "axios"; axios.defaults;
import {checkPasswordValue,desAlert} from "./functions";
$(document).ready(function(){
    $("#reset").submit(function(e){
        e.preventDefault();
        $(this).find('.alert').remove();
        let password = $(this).find('input[name="password"]').val();
        let passwordconf = $(this).find('input[name="passwordconf"]').val();
        $(this).find(".alert").remove();
        if(!checkPasswordValue(password)){
            $(this).find('input[name="password"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">le mot de pass n'est pas correct, veuillez saisir un mot de pass valide.</small>`);
            return false;
        }
        if(!(password === passwordconf)){
            $(this).find('input[name="password"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">Le mot de passe ne correspond pas.</small>`);
            return false;

        }
        axios({
            method: "POST",
            url: "http://localhost/Blog-Personnel/project/backend/api/admin/reset/"+token,
            data: FormData,
            headers:{"token": window.sessionStorage.getItem('token')}
        }).then((response)=>{
            if(response.data.state == 200){
                console.log(response.data);
                // desAlert("success","l'email a été envoyé",1500);
                // $('.form-alert').html(`Nous avons envoyé un lien de récupération de mot de passe directement dans votre boîte mot de pass, si vous n'avez pas reçu le mot de p  ass, cliquez sur <span class="text-primary">Renvoyer l'mot de pass</span>`);
                // $('.form-alert').addClass("alert-success alert");
                // $(this).find('input[name="password"]').val("");
                // $(this).find('button[type="submit"]').text("Renvoyer");
            }else{
                $(this).find('input[name="password"]').parent(".form-group").append(`<small class="d-block alert alert-danger mt-1">L'e-mail n'est pas correct, veuillez saisir une adresse e-mail valide.</small>`);

            }
        });
    });
});