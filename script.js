// Typing Effect
const text = [
  "IT Student",
  "Pope's College",
  "Sawyerpuram"
];

let i = 0;
let j = 0;
let current = "";
let typing = document.getElementById("typing");

function typeEffect() {
  if (j < text[i].length) {
    current += text[i].charAt(j);
    typing.innerHTML = current;
    j++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (current.length > 0) {
    current = current.slice(0, -1);
    typing.innerHTML = current;
    setTimeout(eraseEffect, 60);
  } else {
    j = 0;
    i = (i + 1) % text.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// Dark / Light Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    themeBtn.innerHTML = "🌞";
  } else {
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

// Fade Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(60px)";
  section.style.transition = "0.8s";
  observer.observe(section);
});

// Certificate Image Zoom
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank");
  });
});

// Welcome Message
window.onload = () => {
  setTimeout(() => {
    alert("Welcome to S. Muthu Esakki's Digital Portfolio");
  }, 500);
};