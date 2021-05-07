import axios from "axios"; axios.defaults;
import {desAlert, getUrlParam} from "./functions";
$(document).ready(function(){
    let postId = getUrlParam('id');
    $("#edit").submit(function(e){
        e.preventDefault();
        let formData = $(this).serialize();
        let title = $(this).find('input[name="title"]').val();
        let slug = $(this).find('input[name="slug"]').val();
        let content = $(this).find('textarea[name="content"]').val();
        if(title.length < 2 || title.length == 70){
            desAlert("warning","Le titre doit être de 2 caractères minimum et 70 caractères maximum ",2000);
            return false;
        }
        if(slug.length < 2 || slug.length > 70){
            desAlert("warning","Le titre doit être de 2 caractères minimum et 70 caractères maximum ",2000);
            return false;
        }
        if(content.length < 10){
            desAlert("warning","Le titre doit être de 10 caractères minimum",2000);
            return false;
        }
        if(postId.length == 0){
            desAlert("warning","Article id not found",2000);
            return false;
        }
        axios({
            method: 'POST',
            url: 'http://localhost/Blog-Personnel/project/backend/api/article/update/'+postId,
            data: formData,
            headers: {'token': window.sessionStorage.getItem('token')}
        }).then((response)=>{
            if(response.data.state == 200){
                desAlert("success","L'article a été ajouté avec succès",2000);
                setTimeout(() => {
                    window.location.href = "./"
                }, 500);
            }else{
                desAlert("danger",response.data.msg,2000);
            }
        })
    })
});