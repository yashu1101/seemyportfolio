


window.onscroll = function () {
  if (document.documentElement.scrollTop > 10) {
    document.querySelector('.wrapper').classList.add('wrapper-scroll');
    document.getElementById('nav-element-1').style.color = 'black';
    document.getElementById('nav-element-2').style.color = 'black';
    document.getElementById('nav-element-3').style.color = 'black';
    document.getElementById('nav-element-4').style.color = 'black';
    document.getElementById('nav-element-5').style.color = 'black';



    document.getElementById('brand-letter-all').style.color = '#db26ff';
    document.getElementById('brand-letter-1').style.color = 'red';
    document.getElementById('brand-letter-2').style.color = 'red';
    document.getElementById('brand-letter-3').style.color = 'red';
    document.querySelector('.navbar-toggler-icon').classList.add('navbar-toggler-icon-scroll');



  } else {
    document.querySelector('.wrapper').classList.remove('wrapper-scroll');
    document.getElementById('nav-element-1').style.color = 'white';
    document.getElementById('nav-element-2').style.color = 'white';
    document.getElementById('nav-element-3').style.color = 'white';
    document.getElementById('nav-element-4').style.color = 'white';
    document.getElementById('nav-element-5').style.color = 'white';

    document.getElementById('brand-letter-all').style.color = 'white';
    document.getElementById('brand-letter-1').style.color = 'white';
    document.getElementById('brand-letter-2').style.color = 'white';
    document.getElementById('brand-letter-3').style.color = 'white';

    document.querySelector('.navbar-toggler-icon').classList.remove('navbar-toggler-icon-scroll');

  }

}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  })
})







// animation ///////////////////////////////


function loadingStop() {

  document.querySelector('.loading-screen').style.display = 'none';

}




// mouse hover design 
