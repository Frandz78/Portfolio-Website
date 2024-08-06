// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("nav-menu");

hamburger.addEventListener("click", function () {
  /*
  Tambahkan class hamburger-active jika tidak ada,
  atau
  hilangkan class hamburger-active jika ada.
  */
  hamburger.classList.toggle("hamburger-active");

  /*
 Hilangkan class hidden jika ada,
 atau
 tambahkan class hidden jika tidak ada.
 */
  navbar.classList.toggle("hidden");
});

// Tombol untuk kembali ke atas
const toTopBtn = document.getElementById("toTopBtn");
const popupText = document.querySelector(".popup-text");

toTopBtn.addEventListener("mouseenter", () => {
  popupText.classList.toggle("hidden");
});
toTopBtn.addEventListener("mouseleave", () => {
  popupText.classList.toggle("hidden");
});

// Dark Mode
const darkmodeBtn = document.getElementById("darkmode");
const html = document.querySelector("html");

// Ketika tombol darkmode di-klik
darkmodeBtn.addEventListener("click", function () {
  /* 
  Tambahkan class dark jika tombol darkmode checked,
  hapus class dark jika tombol darkmode belum checked
  */
  darkmodeBtn.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
