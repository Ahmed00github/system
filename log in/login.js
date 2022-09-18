let inp_userName                                    = document.querySelector(".inp_userName");
let inp_pass                                        = document.querySelector(".inp_pass");
let inp_login                                       = document.querySelector(".inp_login");
let done                                            = document.querySelector(".done");
let faild                                           = document.querySelector(".faild");
let eye                                             = document.querySelector(".fa-solid");
let formlogin                                       = document.querySelector(".formlogin");
// console.log(inp_userName,inp_pass,inp_login,done,faild,eye);
eye.onclick = function() {
    if(eye.classList.contains("fa-eye"))
    {
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        inp_pass.setAttribute("type","text");
    }else{
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        inp_pass.setAttribute("type","password");
    }
}
formlogin.onsubmit = function() {
    if(inp_userName.value == "ahmed@123" && inp_pass.value == "123456")
    {
        done.classList.remove("hidden");
        localStorage.logout=1;
        setTimeout(function(){
            return true;
        },1000);
    }else{
        faild.classList.remove("hidden");
        return false;
    }   
}
inp_userName.onkeyup = function() {
    done.classList.add("hidden");
    faild.classList.add("hidden");
}
inp_pass.onkeyup = function() {
    done.classList.add("hidden");
    faild.classList.add("hidden");
}