// Simpel: menu + status buka + tahun
document.getElementById("year").textContent = new Date().getFullYear();

const hamb = document.getElementById("hamb");
const links = document.getElementById("navLinks");
hamb.addEventListener("click", () => links.classList.toggle("show"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("show"))
);

function updateStatus() {
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;
  const open = h >= 14 && h < 22;
  document.getElementById("statusText").textContent = open
    ? "Buka Sekarang"
    : "Tutup — Buka 14.00";
  document.getElementById("statusDot").classList.toggle("closed", !open);
  const t2 = document.getElementById("statusText2");
  if (t2) t2.textContent = open ? "Buka — sampai 22.00" : "Tutup — buka lagi 14.00";
}
updateStatus();
setInterval(updateStatus, 60000);
