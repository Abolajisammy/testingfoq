const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.individual-testimony');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function showSlide(idx) {
  if (idx < 0) {
    index = slides.length - 1; // wrap to last
  } else if (idx >= slides.length) {
    index = 0; // wrap to first
  } else {
    index = idx;
  }

  // move track
  track.style.transform = `translateX(-${index * 100}%)`;
}

// Button clicks
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));



