// Variables

const hamburger = document.querySelector('.hamburger-menu');
const popUp = document.querySelector('.pop-up');
const closeIcon = document.querySelector('.close-icon');
const portfolioBtn = document.querySelector('li:nth-child(1)');
const aboutBtn = document.querySelector('li:nth-child(2)');
const contactBtn = document.querySelector('li:nth-child(3)');
const mainProjectDiv = document.querySelector('.other-projects');
const firstProjectDiv = document.querySelector('.see-project');
const projects = [
  {
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },
  {
    title: 'Website Protfolio',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },
  {
    title: 'Data Dashboard Healthcare',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },
  {
    title: 'Website Protfolio',
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ['html', 'bootstrap', 'Ruby'],
    button: 'See Projects',
    image: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://tarek102.github.io/Portfolio/',
    sourceCode: 'https://github.com/tarek102/Portfolio',
  },

];

const firstProject = {
  title: 'Multi-Post Stories',
  paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  skills: ['html', 'css', 'bootstrap', 'Ruby'],
  button: 'See Project',
  featureImageFirst: './images/ImgPlaceholder.png',
  liveLinkFirst: 'https://tarek102.github.io/Portfolio/',
  sourceCodeFirst: 'https://github.com/tarek102/Portfolio',
};

// functions

function openMenu() {
  popUp.classList.add('active-pop-up');
  closeIcon.classList.add('close-active');
}

function closeMenu() {
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

function goToPortfolio(e) {
  window.location.href = '#go-portfolio';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

function goToContact(e) {
  window.location.href = '#go-contact';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

function goToAbout(e) {
  window.location.href = '#go-about';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

// Events
hamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
portfolioBtn.addEventListener('click', goToPortfolio);
aboutBtn.addEventListener('click', goToAbout);
contactBtn.addEventListener('click', goToContact);
// dynamically create projects

firstProjectDiv.innerHTML = `
        <img src="./images/ImgPlaceholder.png" alt="image 1">
        <div class="multi-post">
          <h3>${firstProject.title}</h3>
          <p>${firstProject.paragraph}</p>
          <div class="skills">
            <ul>
              <li><span>${firstProject.skills[0]}</span></li>
              <li><span>${firstProject.skills[1]}</span></li>
              <li><span>${firstProject.skills[2]}</span></li>
              <li><span>${firstProject.skills[3]}</span></li>
            </ul>
          </div>
          <button class="btn first-btn">${firstProject.button}</button>
        </div>`;

projects.forEach((project) => {
  const divElement = document.createElement('div');
  mainProjectDiv.appendChild(divElement);
  divElement.innerHTML = `
  <div class="see-project-new">
    <div class="project-new">
      <h3>${project.title}</h3>
      <p>${project.paragraph}</p>
      <div class="skills-new">
        <ul>
          <li><span>${project.skills[0]}</span></li>
          <li><span>${project.skills[1]}</span></li>
          <li><span>${project.skills[2]}</span></li>
        </ul>
      </div>
    </div>
    <button class="projects-btn">${project.button}</button>
  </div>`;
});

// On click create popup

function popup(e) {
  const popUpMainDiv = document.createElement('div');
  const popupCard = document.createElement('div');
  popupCard.className = 'popup-card';
  popUpMainDiv.className = 'popup-main-div';

  popupCard.innerHTML = `
    <div class="popup-upper">
      <h3>${projects[e].title}</h3>
      <ul>
        <li><span>${projects[e].skills[0]}</span></li>
        <li><span>${projects[e].skills[1]}</span></li>
        <li><span>${projects[e].skills[2]}</span></li>
      </ul>
      <i class="bi bi-x-lg popup-close-btn"></i>
    </div>
    <div class="popup-lower">
      <div class="popup-lower-left">
        <img src="${projects[e].image}">
      </div>
      <div class="popup-lower-right">
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it 1960s with the releaLorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
          with the releax map lapora verita.
        </p>
        <div class="popup-lower-btn-div">
          <button class="popup-lower-btn" href="${projects[e].liveLink}">See Live</button>
          <button class="popup-lower-btn" href="${projects[e].sourceCode}">See Source</button>
        </div>
      </div>
    </div>
    `;

  mainProjectDiv.appendChild(popUpMainDiv);
  popUpMainDiv.appendChild(popupCard);

  const popupCloseBtn = document.querySelector('.popup-close-btn');
  popupCloseBtn.addEventListener('click', () => {
    mainProjectDiv.removeChild(popUpMainDiv);
  });
}

// first project popup

function firstPopup() {
  const popUpMainDiv = document.createElement('div');
  const popupCard = document.createElement('div');
  popupCard.className = 'popup-card';
  popUpMainDiv.className = 'popup-main-div';

  popupCard.innerHTML = `
    <div class="popup-upper">
      <h3>${firstProject.title}</h3>
      <ul>
        <li><span>${firstProject.skills[0]}</span></li>
        <li><span>${firstProject.skills[1]}</span></li>
        <li><span>${firstProject.skills[2]}</span></li>
      </ul>
      <i class="bi bi-x-lg popup-close-btn"></i>
    </div>
    <div class="popup-lower">
      <div class="popup-lower-left">
        <img src="${firstProject.featureImageFirst}">
      </div>

      <div class="popup-lower-right">
        <p>
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a
          galley of type and scrambled it 1960s with the releaLorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s
          with the releax map lapora verita.
        </p>
        <div class="popup-lower-btn-div">
          <button class="popup-lower-btn" href="${firstProject.liveLinkFirst}">See Live</button>
          <button class="popup-lower-btn" href="${firstProject.sourceCodeFirst}">See Source</button>
        </div>

      </div>
    </div>
    `;

  mainProjectDiv.appendChild(popUpMainDiv);
  popUpMainDiv.appendChild(popupCard);

  const popupCloseBtn = document.querySelector('.popup-close-btn');
  popupCloseBtn.addEventListener('click', () => {
    mainProjectDiv.removeChild(popUpMainDiv);
  });
}

const firstProjectBtn = document.querySelector('.first-btn');
firstProjectBtn.addEventListener('click', () => {
  firstPopup();
});

const projectsBtn = document.querySelectorAll('.projects-btn');
projectsBtn.forEach((btn, ind) => {
  btn.addEventListener('click', () => {
    popup(ind);
  });
});

// form validation
const form = document.getElementById('signup');
const emailValue = document.getElementById('form-email');
const errormessage = document.querySelector('.error');

// submit event
form.addEventListener('submit', (event) => {
  let errorMsg = '';
  const email = emailValue.value.toLowerCase();
  if (email !== emailValue.value) {
    errorMsg = 'Your form cannot be submitted, please turn it to lowercase and resubmit';
  }
  if (errorMsg.length > 0) {
    event.preventDefault();
    errormessage.innerHTML = errorMsg;
  }
});
