const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});




///Image Carousel
document.addEventListener('DOMContentLoaded', function () {

  const main = new Splide('#main-carousel', {
    type: 'fade',
    rewind: true,
    pagination: false,
    arrows: false,
  });

  const thumbnails = new Splide('#thumbnail-carousel', {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    focus: 'center',
  });

  main.sync(thumbnails);

  main.mount();
  thumbnails.mount();
});


const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const btn = item.querySelector(".faq-question");

  btn.addEventListener("click", () => {
    
    // Close others
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});


const slider = document.querySelector(".applications-slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

function getScrollAmount() {
  const card = document.querySelector(".app-card");
  const gap = 20;
  return card.offsetWidth + gap;
}

// Manual buttons
nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
});

// Auto scroll function
function autoScroll() {
  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (slider.scrollLeft >= maxScroll - 5) {
    slider.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
  }
}

// Start auto slider
let autoSlide = setInterval(autoScroll, 3000);

// Pause on hover
slider.addEventListener("mouseenter", () => clearInterval(autoSlide));

slider.addEventListener("mouseleave", () => {
  autoSlide = setInterval(autoScroll, 3000);
});

/* Tabs */
const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

/* Slider */
const slides = document.querySelectorAll(".slides img");
const next = document.querySelector(".slide-btn.next");
const prev = document.querySelector(".slide-btn.prev");

let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});
// Example: Card hover click interaction
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});