
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}





const list = document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item) =>
    item.classList.remove("active") );
    this.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeLink));

