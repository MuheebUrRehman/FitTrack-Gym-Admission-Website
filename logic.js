// scroll button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopLink = document.getElementById("backToTop");

  // Function to handle smooth scrolling
  function scrollToTop(e) {
    e.preventDefault();
    const targetSection = document.getElementById("top-section");

    if (targetSection) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  // Add click event listener to the back-to-top link
  backToTopLink.addEventListener("click", scrollToTop);

  // Function to toggle back-to-top icon visibility based on scroll position
  function toggleBackToTopIcon() {
    const topSection = document.getElementById("top-section");
    const scrollPosition = window.scrollY;

    if (scrollPosition > topSection.offsetTop) {
      backToTopLink.style.display = "block";
    } else {
      backToTopLink.style.display = "none";
    }
  }

  // Add scroll event listener to toggle icon visibility
  window.addEventListener("scroll", toggleBackToTopIcon);

  // Initially hide the icon if the user is already at the top
  toggleBackToTopIcon();
});

// BMI code
document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn"); // Get the calculate button
  const bmiResultElement = document.getElementById("bmiResult"); // Get the element to display BMI result

  // Function to calculate BMI
  function calculateBMI() {
    // Get the input values
    const weight = parseFloat(document.getElementById("weightInput").value);
    const height = parseFloat(document.getElementById("heightInput").value);

    // Your BMI calculation logic here
    let heightMeters = height * 0.3048;

    // Calculate BMI
    let bmi = weight / heightMeters ** 2;

    // Display the BMI value
    bmiResultElement.innerHTML = `<p>Your BMI is ${bmi.toFixed(2)}</p>`;
  }

  // Add event listener to the calculate button
  calculateBtn.addEventListener("click", calculateBMI);
});

// window.addEventListener("scroll", function () {
//   var navbar = document.querySelector(".nsc");
//   if (window.scrollY > 100) {
//     // Change 50 to the desired scroll position where you want to change the navbar color
//     navbar.classList.add("nsc-colored");
//   } else {
//     navbar.classList.remove("nsc-colored");
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const pricingLink = document.querySelector(
//     '.navbar-nav .nav-link[href="/pricing.html"]'
//   );
//   const calculatorLink = document.querySelector(
//     '.navbar-nav .nav-link[href="/fitnessCalculator.html"]'
//   );
//   const aboutLink = document.querySelector(
//     '.navbar-nav .nav-link[href="/about.html"]'
//   );
//   const contactLink = document.querySelector(
//     '.navbar-nav .nav-link[href="/contact.html"]'
//   );

//   // Pricing link click handler
//   pricingLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const pricingSection = document.getElementById("pricing-section");

//     if (pricingSection) {
//       window.scrollTo({
//         top:
//           pricingSection.offsetTop -
//           document.querySelector(".navbar").offsetHeight,
//         behavior: "smooth",
//       });
//     }
//   });

//   // Fitness calculator link click handler
//   calculatorLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const calculatorSection = document.getElementById("calculator-section");

//     if (calculatorSection) {
//       window.scrollTo({
//         top:
//           calculatorSection.offsetTop -
//           document.querySelector(".navbar").offsetHeight,
//         behavior: "smooth",
//       });
//     }
//   });

//   // About link click handler
//   aboutLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const aboutSection = document.getElementById("about-section");

//     if (aboutSection) {
//       window.scrollTo({
//         top:
//           aboutSection.offsetTop -
//           document.querySelector(".navbar").offsetHeight,
//         behavior: "smooth",
//       });
//     }
//   });

//   contactLink.addEventListener("click", function (e) {
//     e.preventDefault();

//     const contactSection = document.getElementById("contact-section");

//     if (contactSection) {
//       window.scrollTo({
//         top:
//           contactSection.offsetTop -
//           document.querySelector(".navbar").offsetHeight,
//         behavior: "smooth",
//       });
//     }
//   });
// });
