var signlogin =document.querySelector(".signlogin");
var yourEmail=document.querySelector("#email");
var yourPassword=document.querySelector("#password");
var login=document.querySelector(".login")
var alarmMessage=document.querySelector(".alarmMessage");
var infoList=[];
if(localStorage.getItem("infoList")!=null){
    infoList=JSON.parse(localStorage.getItem("infoList"));
    // localStorage.clear(infoList)
}


//=======================>function sign in <================================
login.addEventListener("click",function(){
    signIn()
});
function signIn(){
    
        var email=yourEmail.value;
        var password=yourPassword.value;
        if(yourEmail.value=="" &&  yourPassword.value=="" ){
            alarmMessage.innerHTML="All inputs is required";
            alarmMessage.classList.add("text-danger");
        }
    else{}
    if( isCorrect(email,password)){
        location.href = "index.html";
    }
    else{
        alarmMessage.innerHTML="invalid email or password or email already exist";
        alarmMessage.classList.add("text-danger");   
    }
    }
    
//=======================>function isCorrect<================================
function isCorrect(email,password){
    for(var i=0 ; i<infoList.length ; i++){
if( infoList[i].email==email && infoList[i].password==password ){
    localStorage.setItem("userName",infoList[i].name);
    return true;
}
    }
    return false;
}
signlogin.addEventListener("click",function(){
    location.href="signup.html";

});
