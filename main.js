// Fungsi untuk berpindah antar tab
function switchTab(evt, tabName) {
  // Sembunyikan semua tab
  const tabContents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContents.length; i++) {
    tabContents[i].classList.remove("active");
  }

  // Hapus class active dari semua tombol
  const tabBtns = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].classList.remove("active");
  }

  // Tampilkan tab yang dipilih
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Fungsi untuk scroll ke section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

// Effect untuk loading
window.addEventListener("load", function () {
  document.body.style.animation = "fadeIn 1s ease-out";
});
