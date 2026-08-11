const images = [
  "images/grill.jpg",
  "images/grill2.jpg",
  "images/gamenight.png",
  "images/group.jpg"
];

let currentSlide = 0;

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  }

  if (currentSlide >= images.length) {
    currentSlide = 0;
  }

  document.getElementById("carousel-image").src = images[currentSlide];
}