const wrappers = document.querySelectorAll(".wrapper");
let currentIndex = 0;

function showWrapper(index) {
  wrappers.forEach((w, i) => {
    w.classList.remove("active");
    if (i === index) {
      w.classList.add("active");
    }
  });
}

function nextWrapper() {
  currentIndex = (currentIndex + 1) % wrappers.length;
  showWrapper(currentIndex);
}

setInterval(nextWrapper, 30000);