import axios from "axios"; axios.defaults;
$(document).ready(function(){
    $("#logout").click(function(e){
        e.preventDefault();
        window.sessionStorage.removeItem("token");
        window.location.href = "./login.html";
    });
    // set slug
    $('input[name="title"]').keyup(function(){
        let title = $(this).val().trim().toLowerCase().replaceAll(" ", "-").replaceAll(":", "-").replaceAll("/", "-").replaceAll("\\", "-").replaceAll(".", "-").replaceAll(",", "-").replaceAll(";", "-");
        console.log(title);
        $('input[name="slug"]').val(title);
    });
});