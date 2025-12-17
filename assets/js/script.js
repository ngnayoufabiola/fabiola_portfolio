const mobileMenu =document.getElementById ("mobile_menu");
mobileMenu.addEventListener("click",()=>{ 
 const desktopMenu = document.getElementById("desktop_menu");
mobileMenu.classList.to("active");
  desktopMenu.classList.toggle("active");
 }
     )
