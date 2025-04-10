// Slideshow Portion On Top
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slides img");

  let currentIndex = 0;
  const slideCount = slideImages.length;
  const slideWidth = slideImages[0].clientWidth;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  setInterval(nextSlide, 7000); // Change slide every 2 seconds (2000 milliseconds)
});

function subscribe() {
  var email = document.getElementById("email").value;
  if (email) {
    alert("Thank you for subscribing with " + email);
  } else {
    alert("Please enter a valid email address.");
  }
}

// header script

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  // Toggle menu function
  function toggleMenu() {
      nav.classList.toggle('show');
  }

  // Event listener for menu toggle button (click)
  menuToggle.addEventListener('click', function(event) {
      event.stopPropagation(); // Prevents event from immediately closing the menu
      toggleMenu();
  });

  // Event listener to close menu when clicking or touching outside (click and touchstart)
  document.addEventListener('click', function(event) {
      const target = event.target;
      const isNavClicked = nav.contains(target) || menuToggle.contains(target); // Check if the clicked element is inside the navigation or menu toggle
      
      if (!isNavClicked && nav.classList.contains('show')) {
          toggleMenu(); // Close menu if clicked outside and menu is open
      }
  });

  document.addEventListener('touchstart', function(event) {
      const target = event.target;
      const isNavClicked = nav.contains(target) || menuToggle.contains(target); // Check if the touched element is inside the navigation or menu toggle
      
      if (!isNavClicked && nav.classList.contains('show')) {
          toggleMenu(); // Close menu if touched outside and menu is open
      }
  });
});


// ------------------------review section script-----------------------------------------


document.querySelector('.slider').addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
      event.currentTarget.scrollLeft += 100;
  } else {
      event.currentTarget.scrollLeft -= 100;
  }
});


