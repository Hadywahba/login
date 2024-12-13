var userName=document.querySelector("#name");
var userEmail=document.querySelector("#email");
var userPassword=document.querySelector("#password");
var addbtn=document.querySelector(".addbtn");
var message=document.querySelector("#message");
var messagee=document.querySelector(".messagee")
var gotosignin=document.querySelector(".gotosignin");
infoList=[]
if(localStorage.getItem("infoList")!=null){
    infoList=JSON.parse(localStorage.getItem("infoList"));
    // localStorage.clear(infoList)
}
var regex={
   name:{
   value:/^[\D\S\.\?][a-zA-Z0-9]{3,10}$/,
    status:false,
},
email:{
    value:/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
     status:false,
 },
 password:{
    value:/^[a-zA-Z0-9]{5,10}$/,
     status:false,
 },
}

//=======================>function to add info <================================
addbtn.addEventListener("click",function(e){
    addInfo()
})
function addInfo(){
    var information={
        name:userName.value,
        email:userEmail.value,
        password:userPassword.value,
    }
    if(userName.value=="" &&  userEmail.value=="" &&  userPassword.value==""){
        message.classList.add("text-danger");    
message.innerHTML="All inputs is required";
    }
    else{}
    if(validation(email) && emailExist(email) && validation(password)){
        infoList.push(information);
        clearInputs()
        console.log(infoList);
        addLocalStorage();
        message.classList.add("text-success");    
        message.innerHTML="success";
    }
    else{
        messagee.classList.add("text-danger");   
        messagee.innerHTML="invalid email or email already exist";


    }
    
}
//=======================>function to clear input <================================
function clearInputs(){
    userName.value=null;
    userEmail.value=null;
    userPassword.value=null;
}
//=======================>function to localstorage<================================
function addLocalStorage(){
    localStorage.setItem("infoList",JSON.stringify(infoList));
}
//=======================>function to validate<================================
userName.addEventListener("input",function(e){
    validation(userName);
})
userEmail.addEventListener("input",function(e){
    validation(userEmail);
})
userPassword.addEventListener("input",function(e){
    validation(userPassword);
})
function validation(element){
    if(regex[element.id].value.test(element.value)){
        regex[element.id].status=true;
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        return true;
    }
    else{
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
       
        return false;
    }
}
//=======================>function  exist email<================================
function emailExist(email){
for(var i=0;i<infoList.length;i++){
    if(infoList[i].email==email){
        return false;
    }
}
return true;
}
//=======================>go to sign in page<================================
gotosignin.addEventListener("click",function(e){
    window.location.href="signin.html";
})