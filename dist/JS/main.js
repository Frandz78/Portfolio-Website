// const DARKMODE_KEY = "theme";

// const html = document.querySelector("html");
// const darkmodeBtn = document.getElementById("darkmode");

// // Memeriksa apakah darkmode aktif di localstorage atau tidak
// if (localStorage.setItem(DARKMODE_KEY) === "dark") {
//   // Tambahkan class dark jika darkmode aktif di localstorage
//   html.classList.add("dark");
//   // cek tombol darkmode jika darkmode aktif di localstorage
//   darkmodeBtn.checked = true;
// }

// // Jika tombol darkmode diklik
// darkmodeBtn.addEventListener("click", function () {
//   // Apakah tombol darkmode sudah dicek
//   if (darkmodeBtn.checked) {
//     // Tambahkan class dark pada tag html
//     html.classList.add("dark");
//     // lalu simpan di localstorage
//     localStorage.setItem(DARKMODE_KEY, "dark");
//   }
//   // Jika tombol darkmode belum di cek
//   else {
//     // Hapus class dark pada tag html
//     html.classList.remove("dark");
//     // lalu simpan class light pada localstorage
//     localStorage.setItem(DARKMODE_KEY, "light");
//   }
// });

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
