
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


   function submitbtn()
   {
    var mail=document.querySelector("#mail").value.indexOf('@')
    var ad=document.querySelector("#name").value
    var soyad=document.querySelector("#Surname").value
    var password=document.querySelector("#password").value;
    var alertmsj=document.querySelector("#alertmesaj")
    var alert=document.querySelector("#alertmsj")
       
if(ad.length<2 || ad.length>15)
{
    alert.classList.remove("kapalı");
    alert.classList.add("acık");
    alertmsj.innerHTML="İSİM 2'DEN KÜÇÜK VEYA 15 KARAKTERDEN UZUN OLAMAZ!"; 
   
}
else
{
    alert.classList.add("kapalı");
}

if(soyad.length<2 || soyad.length>15)
{
    alert.classList.remove("kapalı");
    alert.classList.add("acık");
    alertmsj.innerHTML="SOYAD 2'DEN KÜÇÜK VEYA 15 KARAKTERDEN UZUN OLAMAZ!"; 
}
else
{
    alert.classList.add("kapalı");
}


if(mail==-1)
{
    alert.classList.remove("kapalı");
    alert.classList.add("acık");
    alertmsj.innerHTML="YANLIŞ VEYA EKSİK MAİL BİLGİSİ!!"; 
}
else
{
    alert.classList.add("kapalı");
}

if(password.length<8)
{
    alert.classList.remove("kapalı");
    alert.classList.add("acık");
    alertmsj.innerHTML="ŞİFRE BİLGİNİZ EN AZ 8 KARAKTER  OLMALIDIR!"; 
}
else
{
    alert.classList.add("kapalı");
}

   }

   
   let btn=document.querySelector("#btn")
   btn.addEventListener("click",submitevent)
   
  function submitevent(event)
  {
    var mail=document.querySelector("#mail")
    var ad=document.querySelector("#name")
    var soyad=document.querySelector("#Surname")
    var password=document.querySelector("#password")

    event.preventDefault();

    localStorage.setItem("name",ad.value)
    localStorage.setItem("soyad",soyad.value)
    localStorage.setItem("mail",mail.value);
    localStorage.setItem("password",password.value);

  }
