document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let isValid = true;
  
    // Ambil input field
    const fullname = document.getElementById("fullname");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const phone = document.getElementById("phone");
  
    // Ambil error text
    const fullnameError = document.getElementById("fullnameError");
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const phoneError = document.getElementById("phoneError");
  
    // Regex rules
    const fullnameRegex = /^[A-Z\s]+$/;
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,13}$/;
  
    // Memvalidasikan nama lengkap
    if (!fullnameRegex.test(fullname.value.trim())) {
      fullnameError.classList.remove("hidden");
      isValid = false;
    } else {
      fullnameError.classList.add("hidden");
    }
  
    // Memvalidasikan Username
    if (!usernameRegex.test(username.value.trim())) {
      usernameError.classList.remove("hidden");
      isValid = false;
    } else {
      usernameError.classList.add("hidden");
    }
  
    // Memvalidasi Email
    if (!emailRegex.test(email.value.trim())) {
      emailError.classList.remove("hidden");
      isValid = false;
    } else {
      emailError.classList.add("hidden");
    }
  
    // Memvalidasi Password
    if (password.value.length < 6) {
      passwordError.classList.remove("hidden");
      isValid = false;
    } else {
      passwordError.classList.add("hidden");
    }
  
    // Memvalidasi Nomor Telepon
    if (!phoneRegex.test(phone.value.trim())) {
      phoneError.classList.remove("hidden");
      isValid = false;
    } else {
      phoneError.classList.add("hidden");
    }
  
    // Mensubmit apabila semua indikatornya valid
    if (isValid) {
      alert("Form berhasil dikirim!");
    }
  });
  