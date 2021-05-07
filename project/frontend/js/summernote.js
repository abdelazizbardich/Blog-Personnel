$(document).ready(function(){
    if($("#editor").length > 0){
        $("#editor").summernote();
    }else{
        console.log("No editor found!");
    }
});