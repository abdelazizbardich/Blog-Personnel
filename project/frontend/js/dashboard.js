import axios from "axios"; axios.defaults;
import {removeTableRow} from "./functions";
$(document).ready(function(){
    // Filter table
    $(".filterTable").keyup(function() {
        let value = $(this).val().toLowerCase();
        $("table tbody").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    // Fill tabel with articles
    axios.get("http://localhost/Blog-Personnel/project/backend/api/article/get",{
        headers:{
            "token": window.sessionStorage.getItem('token')
        }
    }).then((response)=>{
        let articles = response.data.data;
        $('table tbody').html('');
        $.each(articles,(key,val)=>{
            $('table tbody').prepend(`
            <tr data-id="${val['id']}">
                <td>${val['id']}</td>
                <td>${val['title'].substring(0,70)}</td>
                <td>${val['content'].substring(0,150)}...</td>
                <td>${val['views']}</td>
                <td>5</td>
                <td class="d-flex">
                    <a href="single.html?id=${val['id']}" class="btn btn-info"><i class="fa fa-eye"></i></a>
                    <a href="edit.html?id=${val['id']}" class="btn btn-primary"><i class="fa fa-pen"></i></a>
                    <a data-id="${val['id']}" class="btn btn-danger deleteArticle"><i class="fa fa-trash"></i></a>
                </td>
            </tr>`);
            $(".deleteArticle").click(function(){
                let id = $(this).data('id');
                axios.get("http://localhost/Blog-Personnel/project/backend/api/article/delete/"+id,{
                    headers:{
                        "token": window.sessionStorage.getItem('token')
                    }
                }).then((response)=>{
                    removeTableRow(id);
                    window.location.reload();
                })
            });
        });
    });

    // get statistics
    axios.get("http://localhost/Blog-Personnel/project/backend/api/statistics/get",{
        headers: {
            'token': window.sessionStorage.getItem('token')
        }
    }).then((response)=>{
        console.log(response.data.data);
        if(response.data.state == 200){
            $(".total-comments").text(response.data.data.comments);
            $(".total-views").text(response.data.data.views);
            $(".total-articles").text(response.data.data.articles);
        }
    });
});