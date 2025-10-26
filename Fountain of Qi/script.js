let toggleNavStatus = false;

let slideProfileBar = ()=> {

    let sideBarWrapper = document.querySelector(".sidebar");
    let sideBarUl = document.querySelector(".sidebar ul");
    let sideBarTrigger = document.querySelector(".hamburger");
    let sideBarTriggerClose = document.querySelector(".close-button");


    if (toggleNavStatus == false) {
        sideBarWrapper.style.width = "100%";
        sideBarWrapper.style.visibility = "visible";
        sideBarWrapper.style.opacity = "1";
        sideBarUl.style.opacity = "1";
        sideBarTrigger.style.display = "none";
        sideBarTriggerClose.style.display = "block";


        toggleNavStatus = true;
        
    }
    
    else if (toggleNavStatus == true) {
        sideBarWrapper.style.width = "0%";
        sideBarWrapper.style.visibility = "hidden";
        sideBarWrapper.style.opacity = "0";
        sideBarUl.style.opacity = "0";
        sideBarTrigger.style.display = "block";
        sideBarTriggerClose.style.display = "none";


        toggleNavStatus = false;
    }

    }
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

// Button
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));



document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("stats-section");
  const numbers = section.querySelectorAll("h2");

  function animateNumbers() {
    numbers.forEach(num => {
      const finalValue = parseInt(num.getAttribute("data-final").replace(/,/g, ""));

      const duration = 1500;
      const baseInterval = 40;
      const easingStrength = 1.5; 
      
      let startTime = null;

      function update(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        const easedProgress = Math.min(progress ** easingStrength, 1);

        if (easedProgress < 1) {
          const randomValue = Math.floor(Math.random() * finalValue * 1.2);
          num.textContent = randomValue.toLocaleString();

          const dynamicInterval = baseInterval + easedProgress * 100;
          setTimeout(() => requestAnimationFrame(update), dynamicInterval);
        } else {
          num.textContent = finalValue.toLocaleString();
        }
      }

      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
        }
      });
    },
    { threshold: 0.5 } 
  );

  observer.observe(section);
});


  window.addEventListener("load", () => {
    document.querySelector(".intro-text").style.animationPlayState = "running";
  });