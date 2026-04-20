// Inisialisasi AOS
AOS.init({ duration: 800, once: true });

// Navbar Scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("py-2", "shadow-xl");
    nav.classList.remove("py-4");
  } else {
    nav.classList.add("py-4");
    nav.classList.remove("py-2", "shadow-xl");
  }
});

// Filter Menu
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const category = e.target.id.replace("filter-", "");

    // PERBAIKAN: Reset gaya semua tombol
    filterButtons.forEach((btn) => {
      // Gunakan classList.remove/add agar tidak merusak gaya dasar Tailwind
      btn.classList.remove("bg-orange-900", "text-white", "shadow-lg");
      btn.classList.add("bg-white", "text-stone-600", "border-stone-200");
    });

    // Set gaya tombol yang diklik
    e.target.classList.add("bg-orange-900", "text-white", "shadow-lg");
    e.target.classList.remove("bg-white", "text-stone-600", "border-stone-200");

    // Filtering item menu
    menuItems.forEach((item) => {
      item.style.opacity = "0";
      setTimeout(() => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block";
          setTimeout(() => (item.style.opacity = "1"), 50);
        } else {
          item.style.display = "none";
        }
      }, 300);
    });
  });
});
