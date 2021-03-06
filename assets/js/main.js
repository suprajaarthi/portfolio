//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});

//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top black">
<div class="nav-wrapper">
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <a href="index.html"> Supraja Arthi </a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        
        <li><a class="white-text" href="projects.html">Projects</a></li>
        <li><a class="white-text" href="skill.html">Skills</a></li>
        <li><a class="white-text" href="education.html">Education</a></li>

        <li><a class="white-text" href="research.html">Research</a></li>

        <li><a class="white-text" href="https://drive.google.com/file/d/11QyQmK92eNz-c5IIpnZmdO6eOUQHCF0O/view?usp=sharing" target="_blank">My Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
          <label for="switch-1" class="theme-switch">
            <input class="toggle-checkbox" type="checkbox" id="switch-1" name="theme" />
            <div class='toggle-slot'>
              <div class='sun-icon-wrapper'>
                <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
              </div>
              <div class='toggle-button-1 toggle-button'></div>
              <div class='moon-icon-wrapper'>
                <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
              </div>
            </div>
          </label>
        </li>
    </ul>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<br><br><br>
<li><a href="index.html" style="color:white">Home</a></li>
<li><a href="projects.html"  style="color:white">Projects</a></li>
<li><a href="skill.html"  style="color:white" >Skills</a></li>
<li><a href="education.html"  style="color:white">Education</a></li>

<li><a href="research.html"  style="color:white">Research</a></li>
<li><a href="https://drive.google.com/file/d/11QyQmK92eNz-c5IIpnZmdO6eOUQHCF0O/view"  style="color:white" target="_blank">My Resume</a></li>


<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch-2" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch-2" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="true"> </div>
          </div>
          <div class='toggle-button-2 toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
      
</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="footer-left">
  <div class="footer-img" >
  </div>
  <div class="footer-text">
    <p >"We must act out passion before we can feel it."</p>
  </div>
  <div class="footer-icons">
    <a href="https://www.twitter.com/suprajaarthi/" class="twitter sub-footer-icon">
      <i class="fab fa-twitter" ></i>
    </a>
    
    <a href="https://www.linkedin.com/in/supraja-arthi/" class="linkedin sub-footer-icon">
      <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://www.github.com/suprajaarthi/" class="git sub-footer-icon">
      <i class="fab fa-github"></i>
    </a>
    
  </div>
  <div class="footer-email">
    <a href="#" class="email-icon" style="color:#cccccc;">
      <i class="fas fa-envelope-open"></i>
    </a>
  </div>
</div>
<div class="footer-right">
  <h6 style="color:#fff;">Get in Touch</h6>
  <form>
    <div class="name">
      <input type="text" name="name" placeholder="Enter Name" required>
    </div>
    <div class="email">
      <input type="email" name="email" placeholder="Enter Email" required>
    </div>
    <div class="msg">
      <textarea type="text" name="msg" placeholder="Message" required></textarea>
    </div>
    <button type="submit">Send</button>
  </form>
</div>
<!-- <div class="tt-copy">
  <div class="container col-sm-6">
   <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>
  </div>
</div> -->
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);


/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler
//  to support both mobile screen and desktop screensf
if(window.innerWidth <= 800) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector('.toggle-button-2');
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", "dark"); // setting the initial theme to light

  if (localStorage.getItem("theme") == "light") {
    checkbox.checked = true;
  }

  // selecting the footer text & footer icons
  const footerText = document.querySelector('.footer-text p');
  const footerIcons = document.querySelectorAll('.sub-footer-icon');
  const emailIcon = document.querySelector('.email-icon');

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else { 
      /*
      if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
      */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {
    footerText.style.color = '#fff';
    emailIcon.style.color = 'white';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#cccc';
        icon.style.border = '1px solid #fff';

        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = '#4d4d4d';
          icon.style.border = '1px solid #4d4d4d';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#fff';
          icon.style.border = '1px solid #fff';
        });
    });
  }

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {
    footerText.style.color = '#cccccc';
    emailIcon.style.color = '#cccccc';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#fff';
        icon.style.border = '1px solid #cccccc';
        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = 'black';
          icon.style.border = '1px solid #000';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#cccccc';
          icon.style.border = '1px solid #cccccc';
        });
    });
  } 
}