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

// Button clicks
prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));




  // Intersection Observer to detect scroll visibility
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        animateNumbers();
        hasAnimated = true;
      }
    });
  }, { threshold: 0.3 }); // triggers when 30% of the section is visible

  observer.observe(section);