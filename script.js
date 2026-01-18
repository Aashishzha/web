/* Typing effect */
const words = ["student", "web developer"];
let i = 0, j = 0, del = false;
const text = document.getElementById("typing-text");

function typing() {
  if (!del) {
    text.textContent = words[i].slice(0, ++j);
    if (j === words[i].length) setTimeout(() => del = true, 1200);
  } else {
    text.textContent = words[i].slice(0, --j);
    if (j === 0) { del = false; i = (i + 1) % words.length; }
  }
  setTimeout(typing, del ? 80 : 120);
}
typing();

/* Dark / Light mode */
function toggleMode() { document.body.classList.toggle("light"); }

/* Particles */
particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#00ffd5" },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true, color: "#00ffd5", opacity: 0.4 }
  }
});

/* 3D CARD EFFECT */
const card = document.getElementById("card");

card.addEventListener("mousemove", (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * 10;
  const rotateY = ((x - centerX) / centerX) * 10;
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  card.style.boxShadow = `${-rotateY*2}px ${rotateX*2}px 40px rgba(0,255,213,0.4)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  card.style.boxShadow = "0 0 40px rgba(0,0,0,0.4),0 0 80px rgba(0,255,213,0.15)";
});
