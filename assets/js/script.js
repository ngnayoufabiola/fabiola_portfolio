//implementation of mobile menu
const mobileMenu = document.getElementById ("mobile_menu");
mobileMenu.addEventListener("click",() => { 
 const desktopMenu = document.getElementById("desktop_menu");
mobileMenu.classList.to("active");
 desktopMenu.classList.toggle("active");
 });
   // an array of object to store project cards
const projects = [
    {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
    
];


     

