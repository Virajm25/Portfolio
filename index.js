// ✅ Initialize AOS Animations
AOS.init({
  duration: 800,
  once: true
});

// ✅ Theme Toggle
const themeBtn = document.getElementById("themeBtn");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
  document.body.classList.add("light-mode");
}

themeBtn.textContent = currentTheme === "light" ? "☀️" : "🌙";

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  themeBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

// ✅ Typing Animation
const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "Frontend Enthusiast", "JavaScript Lover"];
let i = 0,
  j = 0,
  isDeleting = false;

(function typeEffect() {
  let current = words[i];
  typingElement.textContent =
    current.substring(0, j) + (j % 2 === 0 ? "|" : "");

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
})();

// ✅ More Floating Circles
const circlesContainer = document.querySelector(".bg-circles");

for (let i = 0; i < 25; i++) {
  let c = document.createElement("span");
  let size = Math.random() * 30 + 10;

  c.style.width = `${size}px`;
  c.style.height = `${size}px`;
  c.style.left = `${Math.random() * 100}%`;
  c.style.animationDuration = `${Math.random() * 20 + 10}s`;
  c.style.animationDelay = `${Math.random() * 5}s`;

  circlesContainer.appendChild(c);
}

// ✅ Project Modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const liveBtn = document.getElementById("liveBtn");
const codeBtn = document.getElementById("codeBtn");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;
    liveBtn.href = card.dataset.live;
    codeBtn.href = card.dataset.code;
    modal.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => modal.classList.remove("show"));

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
