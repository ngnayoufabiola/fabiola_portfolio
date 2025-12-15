
//implimentation of mobile_menu//
const mobileMenu = document.getElementById('mobile_menu');
mobileMenu.addEventListener('click', () => {
  const desktopMenu = document.getElementById('desktop_menu');
  mobileMenu.classList.toggle('active');
  desktopMenu.classList.toggle('active');
});
//an array of objects to store project cards//
const projects = [
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
{
  image:'#',
  title:'Multi-Post Stories Gain+Glory',
  technologies:['Ruby on Rails','CSS','JavaScript','HTML'],
  button:'#'
},
];
//function to create project cards
function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage=document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'project card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  project.technologies.forEach(element => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'see project';
  card.appendChild(cardBtn);
  return card;
}
//inserting project cards in the projects section

function insertCards(){
    const projectsContainer = document.getElementById('project_cards');
    projects.forEach((project) => {
        const projectCard = createProjectCards(project);
        projectsContainer.appendChild(projectCard);
    });


}
//event listener to trigger the insertion of cards in to the DOM
document.addEventListener('DOMContentLoaded',insertCards);