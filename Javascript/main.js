// Validasi Form dengan Umpan Balik Visual
document.getElementById("aduan-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let isValid = true; // Untuk melacak apakah semua input valid
    const nama = document.querySelector('input[name="nama"]');
    const email = document.querySelector('input[name="email"]');
    const pesan = document.querySelector('textarea[name="pesan"]');
  
    // Fungsi untuk menampilkan error
    function showError(input, message) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = message;
      input.classList.add("error");
      isValid = false;
    }
  
    // Fungsi untuk menghapus error
    function clearError(input) {
      const errorMessage = input.nextElementSibling;
      errorMessage.textContent = "";
      input.classList.remove("error");
    }
  
    // Validasi Nama
    if (nama.value.trim() === "") {
      showError(nama, "Nama tidak boleh kosong!");
    } else {
      clearError(nama);
    }
  
    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, "Email tidak valid!");
    } else {
      clearError(email);
    }
  
    // Validasi Pesan
    if (pesan.value.trim().length < 20) {
      showError(pesan, "Pesan harus memiliki minimal 20 karakter!");
    } else {
      clearError(pesan);
    }
  
    // Jika semua validasi berhasil
    if (isValid) {
      sendData(); // Panggil fungsi pengiriman data
    }
  });
  
  function sendData() {
    const form = document.getElementById("aduan-form");
    const formData = new FormData(form);
  
    fetch("https://api.example.com/submit-aduan", {
      method: "POST",
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          alert("Form berhasil dikirim!");
          form.reset(); // Reset form setelah berhasil
        } else {
          alert("Terjadi kesalahan saat mengirim form. Silakan coba lagi.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Terjadi kesalahan jaringan. Periksa koneksi internet Anda.");
      });
  }

  // Tambahkan event listener ke semua tab
document.querySelectorAll(".tab-nav li").forEach(tab => {
    tab.addEventListener("click", function() {
      // Hapus kelas active dari semua tab
      document.querySelectorAll(".tab-nav li").forEach(item => item.classList.remove("active"));
      // Tambahkan kelas active ke tab yang diklik
      tab.classList.add("active");
  
      // Sembunyikan semua konten tab
      document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
  
      // Tampilkan konten sesuai tab yang aktif
      const target = tab.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.querySelector(".carousel-nav .prev");
    const nextBtn = document.querySelector(".carousel-nav .next");
    let currentIndex = 0;
  
    // Fungsi untuk menampilkan slide berdasarkan index
    function showSlide(index) {
      // Jika index melebihi batas, kembali ke slide pertama
      if(index >= slides.length) {
        index = 0;
      } else if(index < 0) {
        index = slides.length - 1;
      }
      // Hapus kelas active dari semua slide
      slides.forEach(slide => slide.classList.remove("active"));
      // Tampilkan slide yang sesuai index
      slides[index].classList.add("active");
      currentIndex = index;
    }
  
    // Event listener untuk tombol next
    nextBtn.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });
  
    // Event listener untuk tombol prev
    prevBtn.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".hero-slider .slide");
    const nextArrow = document.querySelector(".slider-arrows .next");
    const prevArrow = document.querySelector(".slider-arrows .prev");
    let currentIndex = 0;
    let slideInterval;
  
    // Fungsi untuk menampilkan slide berdasarkan index
    function showSlide(index) {
      // Hilangkan active dari slide sebelumnya
      slides[currentIndex].classList.remove("active");
      // Hitung index dengan wrapping (jika melebihi jumlah slide, kembali ke 0)
      currentIndex = (index + slides.length) % slides.length;
      // Tampilkan slide berdasarkan index baru
      slides[currentIndex].classList.add("active");
    }
  
    // Fungsi untuk pindah ke slide selanjutnya
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    // Fungsi untuk pindah ke slide sebelumnya
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    // Tambahkan event listener untuk panah klik
    nextArrow.addEventListener("click", function() {
      nextSlide();
      resetInterval();
    });
  
    prevArrow.addEventListener("click", function() {
      prevSlide();
      resetInterval();
    });
  
    // Fungsi untuk memulai auto slide
    function startAutoSlide() {
      slideInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
    }
  
    // Fungsi untuk mereset interval auto slide
    function resetInterval() {
      clearInterval(slideInterval);
      startAutoSlide();
    }
  
    // Mulai auto slide saat halaman dimuat
    startAutoSlide();
  });
  document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");

  navToggle.addEventListener("click", function() {
    mobileNav.classList.toggle("active");
    // Ubah tampilan hamburger ke ikon "close"
    navToggle.classList.toggle("active");
  });
});
