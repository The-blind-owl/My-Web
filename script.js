

//    searchInputIcon
const searchInPutWrapper = document.querySelector(".search-input-wrapper");
const searchInPut = document.querySelector(".search-input-wrapper");
const searchIcon = document.querySelector(".search-icon i");
const closeIcon = document.querySelector(".search-input i");


searchIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.add("change");
  searchInPutWrapper.classList.add("change");

  setTimeout(() => {
    searchIcon.focus();
  }, 1000);
})

closeIcon.addEventListener("click", () => {
  searchIcon.parentElement.classList.remove("change");
  searchInPutWrapper.classList.remove("change")
});

// Nav

let toggle = document.querySelector('.toggle');
let Navigation = document.querySelector('.Navigation');
toggle.onclick = function () {
  toggle.classList.toggle('active');
  Navigation.classList.toggle('active');
}

// nav onclick
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = 'list'
    }
    list[i].className = 'list active'
  }
}


// Slider

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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Counter

var counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerHTML = "0";
  var update = () => {
    var data = +counter.getAttribute("data");
    var inTag = +counter.innerHTML;

    var x = data / 10000000;


    if (inTag < data) {
      counter.innerHTML = Math.ceil(inTag + x);
      setTimeout(update, 1);
    } else {
      counter.innerHTML = data;
    }
  }
  update()
})