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
     {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
     {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
     {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
     {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
     {
        Image: '#',
        title: 'Multi-Post Stories Gain+Glory',
        technologies: ['Ruby on Rails', 'css', 'JavaScript', 'HTML'],
        button: '#'

    },
    //function to create project cards
    function createprojectcards(project){
        const cards= document.createElement('div');
        cards.classList.add('project_card');
        const projectImage = document.createElement('img');
        cardImage.src= project.Image;
        cardImage.alt='project card image';
        cards.appendChild(cardImage);
        const cardtitle = document.createElement('h3');
        cardtitle.innerHTML= project.title;
        cards.appendChild(cardtitle);
        const cardlist = document.createElement('ul');
        project.technologies.forEach(element => {
            const listItem = document.createElement('li');
            listItem.innerHTML= element;
            cardlist.appendChild(listItem);
            card.appendChild(cardlist);
            const cardBtn = document.createElement('button');
            cardBtn.type='button'
            cardBtn.innerHTML= 'See Project';
            cards.appendChild(cardBtn);

        }
      


        
    }
];


