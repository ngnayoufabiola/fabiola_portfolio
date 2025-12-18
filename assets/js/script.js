// implimentation of mobile_menu//
const mobileMenu = document.getElementById('mobile_menu');
if (mobileMenu) {
  mobileMenu.addEventListener('click', () => {
    const desktopMenu = document.getElementById('desktop_menu');
    mobileMenu.classList.toggle('active');
    desktopMenu.classList.toggle('active');
  });
} else {
  // eslint-disable-next-line no-console
  console.warn('no element with id "mobile_menu" found.mobile menu event lisener not attached.');
}
// an array of objects to store project cards//
const projects = [
  {
    image: './assets/images/af.png',
    title: 'Fabiola Portfolio homepage',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: ' A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },

  {
    image: './assets/images/av.jpg',
    title: 'Fabiola Portfolio Task',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: ' A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },
  {
    image: './assets/images/as.png',
    title: 'Fabiola Portfolio Design',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: ' A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },
  {
    image: './assets/images/project_image.png',
    title: 'Fabiola Portfolio Development',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: ' A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },
  {
    image: './assets/images/ac.png',
    title: 'Fabiola Portfolio Project',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: ' A responsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },
  {
    image: './assets/images/ad.jpg',
    title: 'Fabiola Portfolio website',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    button: '#',
    // popup window data//
    Sub: 'keeping tract of hundreds of components',
    description: '  Aresponsive personal portfolio showcasing projects, skills, and contact information. It uses semantic HTML, modern CSS, and vanilla JavaScript to build interactive components, image galleries, and clear navigation. The design focuses on accessibility, mobile-first responsive layout, and presentation. Designed for recruiters and collaborators, the site demonstrates component reusability, version control workflows, and deploy-ready structure. Live demos, README documentation, and accessible contact forms make it straightforward to evaluate work, professional impact, skills, and approach to full-stack development.',
    Live: 'https://fabiola-portfolio.vercel.app',
    Source: 'https://github.com/ngnayoufabiola/fabiola_portfolio.git',
  },

];
// function to create project cards
// funtion to create popup modal
function OpenModal(projects) {
  document.body.classList.add('modal-open');
  const modal = document.createElement('div');
  modal.classList.add('modal_container');
  modal.id = 'modal_container';
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal_content');
  const modalImageContainer = document.createElement('div');
  modalImageContainer.classList.add('modal_image_container');
  const modalImage = document.createElement('img');
  modalImage.src = projects.image;
  modalImage.alt = 'popup modal image';
  modalImageContainer.appendChild(modalImage);
  const closeButton = document.createElement('span');
  closeButton.classList.add('close_Button');
  closeButton.innerHTML = '&times';
  closeButton.addEventListener('click', () => {
    modal.remove();
    document.body.classList.remove('modal-open');
  });
  modalImageContainer.appendChild(closeButton);
  modalContent.appendChild(modalImageContainer);
  const modalSub = document.createElement('h3');
  modalSub.innerHTML = projects.Sub;
  modalContent.appendChild(modalSub);
  const modalTechlist = document.createElement('ul');
  projects.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    modalTechlist.appendChild(listItem);
  });
  modalContent.appendChild(modalTechlist);
  const modalDescription = document.createElement('p');
  modalDescription.innerHTML = projects.description;
  modalContent.appendChild(modalDescription);
  const modallinks = document.createElement('div');
  modallinks.classList.add('modal_links');
  const seelive = document.createElement('a');
  seelive.href = projects.Live;
  seelive.target = '_blank';
  seelive.innerHTML = 'see live';
  const seeSources = document.createElement('a');
  seeSources.href = projects.Source;
  seeSources.innerHTML = 'see source';
  seeSources.target = '_blank';
  modallinks.appendChild(seelive);
  modallinks.appendChild(seeSources);
  modalContent.appendChild(modallinks);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  // close on Escape key
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEsc);
    }
  };
  // close on background click
  const handleBackgroundClick = (e) => {
    if (e.target === modal) {
      modal.remove();
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleEsc);
    }
  };
  modal.addEventListener('click', handleBackgroundClick);
  document.addEventListener('keydown', handleEsc);
}

function createProjectCards(project) {
  const card = document.createElement('div');
  card.classList.add('project_card');
  const cardImage = document.createElement('img');
  cardImage.src = project.image;
  cardImage.alt = 'project card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = project.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  project.technologies.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = element;
    cardList.appendChild(listItem);
  });
  card.appendChild(cardList);
  const cardBtn = document.createElement('button');
  cardBtn.type = 'button';
  cardBtn.innerHTML = 'see project';
  cardBtn.addEventListener('click', () => OpenModal(project));
  card.appendChild(cardBtn);
  return card;
}
// inserting project cards in the projects section

function insertCards() {
  const projectsContainer = document.getElementById('project_cards');
  if (!projectsContainer) {
    // Avoid throwing if the target container isn't present in the DOM
    // (Uuseful during testing or on pages that don't includ the projects section)
    // eslint-disable-next-line no-console
    console.warn('No element with id "project_cards" found. Project cards not inserted.');
    return;
  }
  projects.forEach((project) => {
    const projectCard = createProjectCards(project);
    projectsContainer.appendChild(projectCard);
  });
}

// an array of objects to store abouts cards//
const abouts = [
  {
    image: './assets/images/languages.png',
    title: 'Languages',
    technologies: ['JavaScript', 'Ruby', 'HTML', 'CSS'],
    button: '#',
  },
  {
    image: './assets/images/frameworks.png',
    title: 'Frameworks',
    technologies: ['React.js', 'Ruby on Rails', 'RSpec', 'Capybara', 'Selenium'],
    button: '#',
  },
  {
    image: './assets/images/skills.png',
    title: 'Skills',
    technologies: ['Database Management', 'Version Control', 'CLI', 'Web Development', 'API Design'],
    button: '#',
  },

];
// function to create about cards
function createAboutCards(about) {
  const card = document.createElement('div');
  card.classList.add('about_card');
  const cardImage = document.createElement('img');
  cardImage.src = about.image;
  cardImage.alt = 'about card image';
  card.appendChild(cardImage);
  const cardTitle = document.createElement('h3');
  cardTitle.innerHTML = about.title;
  card.appendChild(cardTitle);
  const cardList = document.createElement('ul');
  about.technologies.forEach((element) => {
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
// inserting about cards in the about section

function insertAboutCards() {
  const aboutsContainer = document.getElementById('abouts_cards');
  abouts.forEach((about) => {
    const aboutCard = createAboutCards(about);
    aboutsContainer.appendChild(aboutCard);
  });
}
// event listener to trigger the insertion of cards in to the DOM
document.addEventListener('DOMContentLoaded', () => {
  insertCards();
  insertAboutCards();
});
