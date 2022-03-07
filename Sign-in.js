   
   /*var email= new Array();
   var password=[];

   function signin()
   {
   var mail=document.querySelector("#mail").value
   var password=document.querySelector("#password").value;
   email.unshift(mail);
   console.log(email);
   return false;
  
   }
   localStorage.setItem("email",JSON.stringify(email));
   email=JSON.parse(localStorage.getItem("email"))
   var password=document.querySelector("#password").innerHTML=email[0].localStorage;
  console.log(signin());


  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));
form.addEventListener('submit', function (e) {
   e.preventDefault();
 
   itemsArray.push(input.value);
   localStorage.setItem('items', JSON.stringify(itemsArray));
   liMaker(input.value);
   input.value = "";
 });
 */
  /*let user="seyma";
localStorage.setItem("key",user);

let username={
  name:"seyma",
  isActive:true
}
localStorage.setItem("user",JSON.stringify(username) )
username=JSON.parse(localStorage.getItem("username")) */


var password=document.querySelector("#password");
var eye= document.querySelector("#eye");

function myFunction() {
    
    if (password.type === "password") {
      password.type = "text";
      eye.classList.add("fa-solid")
      eye.classList.add("fa-eye-slash")

    } else {
      password.type = "password";
      eye.classList.remove("fa-solid")
      eye.classList.remove("fa-eye-slash")
      eye.classList.add("fa-solid")
      eye.classList.add("fa-eye")
      
    }
  }
  eye.addEventListener("click",myFunction());


function getlocal(){

 var mailLocal=localStorage.getItem('mail')
 var passwordLocal=localStorage.getItem("password")

 var mail=document.querySelector("#mail")
 var alert=document.querySelector("#alertmesaj")
 var password=document.querySelector("#password")
 var alertmsj=document.querySelector("#alertmsj")

 
 if(mail.value !== mailLocal)
 {
   alertmsj.classList.remove("kapalı");
   alertmsj.classList.add("acık");
   alert.innerHTML="YANLIŞ VEYA EKSİK MAİL BİLGİSİ!!"; 


 }
 
 else if (password.value !== passwordLocal)
 {
   alertmsj.classList.remove("kapalı");
   alertmsj.classList.add("acık");
   alert.innerHTML="YANLIŞ ŞİFRE"; 
 }
 
 else
 {
   alertmsj.classList.remove("kapalı");
   alertmsj.classList.add("acık");
   alert.innerHTML="BAŞARILI"; 
   
 }

}
