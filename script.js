// Variables

let hamburger = document.querySelector('.hamburger-menu');
let popUp = document.querySelector('.pop-up');
let closeIcon = document.querySelector('.close-icon');
let portfolioBtn = document.querySelector('li:nth-child(1)');
let aboutBtn = document.querySelector('li:nth-child(2)');
let contactBtn = document.querySelector('li:nth-child(3)');
let mainProjectDiv = document.querySelector('.other-projects');
let projects = [
  {
    title: "Profesional Art Printing Data",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
   {
    title: "Data Dashboard Healthcare",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
  {
    title: "Website Protfolio",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
  {
    title: "Profesional Art Printing Data",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
  {
    title: "Data Dashboard Healthcare",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
  {
    title: "Website Protfolio",
    paragraph: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    skills: ["html", "bootstrap", "Ruby"],
    button: "See Projects"
  },
  
];


// Events

hamburger.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
portfolioBtn.addEventListener('click', goToPortfolio);
aboutBtn.addEventListener('click', goToAbout);
contactBtn.addEventListener('click', goToContact);

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
  window.location.href='#go-portfolio';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

function goToContact(e) {
  window.location.href='#go-contact';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}

function goToAbout(e) {
  window.location.href='#go-about';
  e.preventDefault();
  popUp.classList.remove('active-pop-up');
  closeIcon.classList.remove('close-active');
}


// dynamically create projects


for (const val in projects) {
  let divElement = document.createElement('div');
  mainProjectDiv.appendChild(divElement);
  divElement.innerHTML = `
  <div class="see-project-new">
    <div class="project-new">
      <h3>${projects[val]["title"]}</h3>
      <p>${projects[val]["paragraph"]}</p>
      <div class="skills-new">
        <ul>
          <li><span>${projects[val]["skills"][0]}</span></li>
          <li><span>${projects[val]["skills"][1]}</span></li>
          <li><span>${projects[val]["skills"][2]}</span></li>
        </ul> 
      </div>
    </div>
    <button class="projects-btn">${projects[val]["button"]}</button>
  </div>`;
}

// On click create popup

let projectsBtn = document.querySelectorAll('.projects-btn');
let projectsNew = document.querySelector('.see-project-new');
projectsBtn.forEach(function(btn, ind){
  btn.addEventListener('click', () => {
    popup(ind)
  });
  

})


function popup(e){
  let popUpMainDiv = document.createElement('div');
  let popupCard = document.createElement('div');
  popupCard.className = "popup-card"
  popUpMainDiv.className= "popup-main-div";
 
    popupCard.innerHTML= `
    <div class="popup-upper">
      <h3>${projects[e]["title"]}</h3>
      <ul>
        <li><span>${projects[e]["skills"][0]}</span></li>
        <li><span>${projects[e]["skills"][1]}</span></li>
        <li><span>${projects[e]["skills"][2]}</span></li>
      </ul>
      <i class="bi bi-x-lg popup-close-btn"></i>
    </div>
    <div class="popup-lower">
      <div class="popup-lower-left">
        <img src="./images/Snapshoot-Portfolio.png">
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
        <div>
          <button class="popup-lower-btn">See Live</button>
          <button class="popup-lower-btn">See Source</button>
        </div>

      </div>
    </div>
    `;
  
  mainProjectDiv.appendChild(popUpMainDiv)
  popUpMainDiv.appendChild(popupCard);

  let popupCloseBtn = document.querySelector('.popup-close-btn');
  popupCloseBtn.addEventListener('click', function(){
    mainProjectDiv.removeChild(popUpMainDiv)

  })
  
}













