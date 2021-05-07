import axios from "axios"; axios.defaults;
import {getUrlParam} from './functions';
let id = getUrlParam('id');
axios.get('http://localhost/Blog-Personnel/project/backend/api/article/find/'+id,{
    headers: {'token': window.sessionStorage.getItem('token') }
}).then((response)=>{
    if(response.data.state == 200){
        $(".b-title").text(response.data.data.title);
        $(".b-slug").text(response.data.data.slug);
        $(".b-content").html(response.data.data.content);
    }
});