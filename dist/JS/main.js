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

// Dropdown Menu
const dropdownBtn = document.getElementById("dropdown-menu");
const dropdownList = document.getElementById("dropdown-list");

// Ketika tombol dropdown(tombol More) di-klik
dropdownBtn.addEventListener("click", function () {
  /*
 Hilangkan class hidden jika ada,
 atau
 tambahkan class hidden jika tidak ada.
 */
  dropdownList.classList.toggle("hidden");

  /*
 Tambahkan class show jika tidak ada,
 atau
 hilangkan class show jika ada.
 */
  dropdownList.classList.toggle("show");
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

// Contact Form
const scriptURL = "https://script.google.com/macros/s/AKfycbzeLvINF75l4LR-HOaZxQEWjPPT9sOqcdtLg44Ugo95dxXIj0ZeHA1HJ292RXvbv92EbQ/exec";
const form = document.forms["FaridFn-contact-form"];

// Ketika Form dikirim
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validasi
  const inputName = form.name.value;
  const inputEmail = form.email.value;
  const inputMessage = form.message.value;

  if (!inputName || !inputEmail || !inputMessage) {
    alert("Please fill in all fields");
    return;
  }

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);

      const popupText = document.getElementById("popup-form");
      const popupFormBtn = document.getElementById("btn-close");

      // Munculkan pesan popup berhasil dikirim
      popupText.classList.remove("hidden");

      // Ketika tombol close pada popup form diklik
      popupFormBtn.addEventListener("click", function () {
        // Hilangkan pesan popup
        popupText.classList.add("hidden");
      });
    })
    .catch((error) => console.error("Error!", error.message));

  form.reset();
});
