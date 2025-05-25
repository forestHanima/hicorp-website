window.onload = function () {
  alert("Welcome to H.I Corporation – Your Beauty, Our Passion!");

  const shopBtn = document.querySelector('.btn');
  if (shopBtn) {
    shopBtn.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent actual link navigation (for demo)
      alert("Redirecting to our shop...");
      // To enable navigation, remove event.preventDefault() or redirect:
      // window.location.href = "services.html";
    });
  }
};
