var logoutAnchor=document.querySelector(".logoutAnchor");
var title=document.querySelector(".title");
var userName=localStorage.getItem("userName");



title.innerHTML=" Welcome " + userName;

//=======================>go to sign in  page <================================
logoutAnchor.addEventListener("click", function(){
    location.href = "signin.html";
})