const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Status buka/tutup
function cekBuka() {
  const now = new Date();
  const jam = now.getHours();
  const menit = now.getMinutes();
  const total = jam * 60 + menit;
  const buka = 14 * 60; // 14.00
  const tutup = 22 * 60; // 22.00
  const dot = document.getElementById("statusDot");
  const text = document.getElementById("statusText");
  const text2 = document.getElementById("statusText2");
  if (total >= buka && total < tutup) {
    if (dot) dot.classList.remove("closed");
    if (text) text.textContent = "Buka Sekarang";
    if (text2) text2.textContent = "Buka Sekarang (14.00–22.00)";
  } else {
    if (dot) dot.classList.add("closed");
    if (text) text.textContent = "Tutup • Buka 14.00–22.00";
    if (text2) text2.textContent = "Tutup • Buka 14.00–22.00";
  }
}
cekBuka();
setInterval(cekBuka, 60000);

// Mobile nav
const hamb = document.getElementById("hamb");
const navLinks = document.getElementById("navLinks");
if (hamb && navLinks) {
  hamb.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}