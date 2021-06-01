AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  // {
  //   title: "TensorFlow Developer Professional Certification",
  //   cardImage: "assets/images/education-page/tf_developer.png",
  //   moocLink: "https://www.tensorflow.org/certificate",
  // },
  {
    title: "Full Stack Web Development",
    cardImage: "assets/images/education-page/WebDev.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-316ed0ff-10d4-4642-8385-54ce275bfbf8/",
  },
  {
    title: "Data Structures and Algorithms",
    cardImage: "assets/images/education-page/DSA.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-c400bebf-8294-4cfd-8042-46f8e7a8b0ae/",
  },
  {
    title: "Flutter App Development",
    cardImage: "assets/images/education-page/Flutter.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-d7f1cfbf-4062-4787-accd-15d39b72db8f/",
  },
  {
    title: "Complete React JS Course",
    cardImage: "https://udemy-certificate.s3.amazonaws.com/image/UC-7f90ef9b-33c5-40ee-aa6a-9de327989da4.jpg?v=1603277604000",
    moocLink: "https://www.udemy.com/certificate/UC-7f90ef9b-33c5-40ee-aa6a-9de327989da4/",
  },
  {
    title: "Flutter App Development",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~9A879RXF6TNM/CERTIFICATE_LANDING_PAGE~9A879RXF6TNM.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-d7f1cfbf-4062-4787-accd-15d39b72db8f/",
  },
  {
    title: "Full Stack Web Development",
    cardImage: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CFR933QMXUMB/CERTIFICATE_LANDING_PAGE~CFR933QMXUMB.jpeg",
    moocLink: "https://www.udemy.com/certificate/UC-316ed0ff-10d4-4642-8385-54ce275bfbf8/",
  },
  {
    title: "Data Structures and Algorithms",
    cardImage: "assets/images/education-page/IO.png",
    moocLink: "https://www.udemy.com/certificate/UC-c400bebf-8294-4cfd-8042-46f8e7a8b0ae/",
  },
 
  {
    title: "Data Engineering for Everyone",
    cardImage: "assets/images/education-page/DC-DE.png",
    moocLink: "https://www.datacamp.com/statement-of-accomplishment/course/c9a60c926a34406f1d44e46ab2cb91e8aeab2220",
  },
  {
    title: "Intro to Python",
    cardImage: "assets/images/education-page/py.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },

  {
    title: "Intro to SQL",
    cardImage: "assets/images/education-page/SQL.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },


  {
    title: "Intro to ML",
    cardImage: "assets/images/education-page/Kag.png",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },

  {
    title: "Full Stack Web Development",
    cardImage: "assets/images/education-page/Ed-py.png",
    moocLink: "https://courses.edx.org/certificates/9ed134fcaf3d4e689b40948491745e79",
  },
  {
    title: "Android App Development",
    cardImage: "assets/images/education-page/Pyba.png",
    moocLink: "https://courses.edx.org/certificates/748697de8bb74ea395ae384102d3b7eb",
  },
  {
    title: "Blockchain & Cryptocurrency",
    cardImage: "assets/images/education-page/GL.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "TCS ION",
    cardImage: "assets/images/education-page/HR.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Sequences, Time Series in Tensorflow",
    cardImage: "assets/images/education-page/Cursa.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Full Stack Web Development",
    cardImage: "assets/images/education-page/NLP.png",
    moocLink: "https://www.udemy.com/certificate/UC-316ed0ff-10d4-4642-8385-54ce275bfbf8/",
  },
  {
    title: "Data Structures and Algorithms",
    cardImage: "assets/images/education-page/SK.png",
    moocLink: "https://www.udemy.com/certificate/UC-c400bebf-8294-4cfd-8042-46f8e7a8b0ae/",
  },
  {
    title: "Flutter App Development",
    cardImage: "assets/images/education-page/FF.png",
    moocLink: "https://www.udemy.com/certificate/UC-d7f1cfbf-4062-4787-accd-15d39b72db8f/",
  },
  {
    title: "Full Stack Web Development",
    cardImage: "assets/images/education-page/NLP.png",
    moocLink: "https://www.udemy.com/certificate/UC-316ed0ff-10d4-4642-8385-54ce275bfbf8/",
  },
  {
    title: "Data Structures and Algorithms",
    cardImage: "assets/images/education-page/SK.png",
    moocLink: "https://www.udemy.com/certificate/UC-c400bebf-8294-4cfd-8042-46f8e7a8b0ae/",
  },
  {
    title: "Flutter App Development",
    cardImage: "assets/images/education-page/CoreP.png",
    moocLink: "https://www.udemy.com/certificate/UC-d7f1cfbf-4062-4787-accd-15d39b72db8f/",
  },
  // https://www.sololearn.com/Certificate/1060-6894217/jpg/
  {
    title: "Full Stack Web Development",
    cardImage: "https://www.sololearn.com/Certificate/1060-6894217/jpg/",
    moocLink: "https://www.udemy.com/certificate/UC-316ed0ff-10d4-4642-8385-54ce275bfbf8/",
  },
  {
    title: "Data Structures and Algorithms",
    cardImage: "assets/images/education-page/skpy.png",
    moocLink: "https://www.udemy.com/certificate/UC-c400bebf-8294-4cfd-8042-46f8e7a8b0ae/",
  },
 

];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} height="180px" class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "R.M.K Engineering College",
    image: "./assets/images/education-page/RMK_Engineering_College.jpg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2016-2020)",
    description: "<li> CGPA - 8.56/10 </li><li>Top 1% in the department</li>",
  },

  {
    heading: "Higher Secondary - Velammal Matriculation Higher Secondary School",
    image: "./assets/images/education-page/velammal.png",
    subheading: "Maths - Biology (2014 - 2016)",
    description: "<li> 1159/1200 </li><li> 100% Scholarship Holder </li><li>Top 1% in the department</li>",
  },
  {
    heading: "High School - Velammal Matriculation Higher Secondary School",
    image: "./assets/images/education-page/velammal.png",
    subheading: "(2012 - 2014)",
    description: "<li> 494/500 </li><li>State 6th Rank</li><li>Top 1% in the department</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);