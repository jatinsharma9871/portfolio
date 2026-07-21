// AOS init
AOS.init({
  duration: 1200,
  once: true,
});

// YEAR
document.getElementById("year").innerText = new Date().getFullYear();

// NAV MOBILE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// CLOSE MENU ON CLICK
document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("show"));
});

// SCROLL PROGRESS
const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progress.style.width = scrolled + "%";
});

// TYPING EFFECT
// 🔥 PREMIUM TYPING (STABLE + NO SHIFT)
const typingEl = document.getElementById("typing");

const words = [
  "Full Stack Web Developer",
 "Senior Shopify Developer",
  "Shopify Theme + CRO Expert"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  if (!typingEl) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typingEl.textContent = currentWord.substring(0, charIndex++);
  } else {
    typingEl.textContent = currentWord.substring(0, charIndex--);
  }

  let speed = deleting ? 40 : 70;

  // pause at full word
  if (!deleting && charIndex === currentWord.length) {
    speed = 1200;
    deleting = true;
  }

  // move to next word (FIXED: no negative index)
  else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

// ✅ start safely
document.addEventListener("DOMContentLoaded", typeEffect);

// PROJECTS DATA + MODAL (Sverve added as index 0)
const projects = [
  {
    title: "Sverve By Gash",
    desc: "Currently working as Senior Shopify Developer on thesverve.com. Delivered theme improvements, speed optimization, metafields, advanced filters, custom sections, homepage redesign enhancements and conversion focused updates.",
    img: "static/images/Sverve.png",
    link: "https://thesverve.com/",
  },
  {
    title: "SehatUP",
    desc: "Optimized platform UX, improved consultation flow, Shopify enhancements, API integrations and performance improvements.",
    img: "static/images/pai.png",
    link: "https://sehatup.com/",
  },
  {
    title: "Doctor Bhargava",
    desc: "Built scalable site features, improved load speed, added custom integrations for better user experience and growth.",
    img: "static/images/reebok.png",
    link: "https://www.doctorbhargava.com/",
  },
  {
    title: "Bio Valley",
    desc: "Developed and optimized Shopify store with performance + CRO improvements and integrations for global reach.",
    img: "static/images/UrbanLadde.png",
    link: "https://bio-valley.com/",
  },
];

const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

function openProject(index) {
  modal.classList.add("show");
  modalImg.src = projects[index].img;
  modalTitle.textContent = projects[index].title;
  modalDesc.textContent = projects[index].desc;
  modalLink.href = projects[index].link;
}

function closeProject() {
  modal.classList.remove("show");
}

// close modal on background click
modal.addEventListener("click", (e) => {
  if (e.target.id === "projectModal") closeProject();
});
