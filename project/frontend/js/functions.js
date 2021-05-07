export function checkEmailValue(email){
    const emailPattern = /^\S+@\S+\.\S+$/;
    
    if(emailPattern.test(email)){
        return true;
    }else{
        return false;
    }
}
export function checkPasswordValue(password){
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(passwordPattern.test(password)){
        return true;
    }else{
        return false;
    }
}
export function desAlert(type,msg,timeOut){
    let alertMsg = document.createElement("div");
                alertMsg.classList.add("alert-auto-dissmiss","bg-"+type,"rounded","shadow","p-2","text-light");
                alertMsg.textContent = msg;
                $('body').append(alertMsg);
                setTimeout(() => {
                    $(alertMsg).fadeOut();
                    setTimeout(() => {
                        alertMsg.remove();
                    }, 500);
                }, timeOut);
}
export function removeTableRow(id){
    $(`tr[data-id="${id}"]`).fadeOut();
    setTimeout(() => {
        $(`tr[data-id="${id}"]`).remove();
    }, 500);
}
export function getUrlParam(param){
    var url_string = window.location.href
    var url = new URL(url_string);
    var param = url.searchParams.get(param);
    return param;
}