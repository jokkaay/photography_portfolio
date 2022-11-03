
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');

    burger.addEventListener('click', ()=>{
    nav.classList.toggle('nav_active');
       navLinks.forEach((link, index) =>{
           if(link.style.animation){
               link.style.animation = ``;
           }else{
               link.style.animation = `navLinkFade 0.5s ease forwards ${index /7+0.5}s`;
           }   
          
        });
 
        burger.classList.toggle('toggle');      

    });
}


navSlide();

//SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function FullView(ImgLink){
  document.getElementById("FullImage").src = ImgLink;
  document.getElementById("FullImageView").style.display = "block";
};

function CloseFullView(){
  document.getElementById("FullImageView").style.display = "none";
};
 
