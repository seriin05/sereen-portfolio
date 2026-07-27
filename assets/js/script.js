document.querySelector(".cta-button").addEventListener('click',function(e){
e.preventDefault();
document.querySelector("#contact").scrollIntoView({behavior:"smooth"});
});


function  validateForm(){
var input= document.getElementById("name-feild") ;
if(input.value.length > 10){
alert("user name must be less than 10 characters");
return false ;
}
alert("form submitted successfull");
return true;}

const menuBtn = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});
