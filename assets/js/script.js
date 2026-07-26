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