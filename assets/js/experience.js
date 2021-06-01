//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Engineer - Media, Video and AI Analytics",
    cardImage: "assets/images/experience-page/MulticoreWare_blue_logo-removebg.png",
    place: "Multicoreware Inc",
    time: "(Sep 2020 – Present)",
    desp: "<li>Responsible for implementing efficient, quantized Computer Vision and Speech Models for Edge Devices, scaling and Fine-tuning ML Models, Integrating State-of-the-art methods for Automatic LipSync Detection</li>",
  },
  
  {
    title: "Machine Learning Intern",
    cardImage: "assets/images/experience-page/MulticoreWare_blue_logo-removebg.png",
    place: "Multicoreware Inc",
    time: "(Dec 2019 – Aug 2020)",
    desp:"<li>Worked on the project 'Driver Monitoring System' An in-car security system powered by latest Deep Learning methods was prototyped.</li>",
  },

  {
    title: "Project Team Lead",
    cardImage: "assets/images/experience-page/mit.png",
    place: "Massachusetts Institute of Technology",
    time: "(Aug 2020 – Oct 2020)",
    desp:"<li>Prototyped and Pitched 3 different solutions in a three day long week hackathon</li>",
  },
  {
    title: "Project Team Lead",
    cardImage: "assets/images/experience-page/sih-logo.png",
    place: "Smart India Hackathon, Government of India",
    time: "(Jan 2020 – Aug 2020)",
    desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },



];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Smart India Hackathon 2020",
    cardImage: "assets/images/experience-page/sih-logo.png",
    description:
      "",
  },
  {
    title: "MIT Hack4Future",
    cardImage: "assets/images/experience-page/Hack4Future.png",
    description:
      "",
  },
  {
    title: "Mission: Unite",
    cardImage: "assets/images/experience-page/mission_unit.jpg",
    description:
      "",
  },
  {
    title: "Hack-Una- Matata",
    cardImage: "assets/images/experience-page/hackuna_matata.jpg",
    description:
      "",
  },
  {
    title: "MIT India Turning the Tide - COVID19 Challenge",
    cardImage: "assets/images/experience-page/MIT_india_covid19.png",
    description:
      "",
  },
  {
    title: "Pycharm Hacks - Jetbrains",
    cardImage: "assets/images/experience-page/pycharm_hack.png",
    description:
      "",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Talent Quest for India - Tele Mentoring",
    image: "assets/images/experience-page/tqi-express.jpg",
    time: "06/2020 - 08/2020",
    desp: "<li>During COVID-19 pandemic, I volunteer myself with Phone Call Mentoring during which I will be calling my Mentee and helping them with their studies.</li>",
  },
  {
    title: "Talent Quest for India - Workshop Tutor",
    image: "assets/images/experience-page/tqi-picture.jpg",
    time: "03/2020 - 08/2020",
    desp: "<li>I visit nearby schools and teach soft skills and effective learning techniques to the under previliged Government school students for free of cost. </li>",
  },
  {
    title: "Workshop on Coding",
    image: "assets/images/experience-page/workshop.JPG",
    time: "03/2020 - 08/2020",
    desp: "<li>I have got placed at the very second company that visited our college. After that, I have shared my interview experience and coding skills with my fellow students.</li>",
  },
  {
    title: "Alumni Connect",
    image: "assets/images/experience-page/workshop.JPG",
    time: "03/2020 - 08/2020",
    desp: "<li>I frequently provide mentoring sessions and guide the projects of my college juniors and drive a workshop session on latest technologies.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);

