// Function to show a confirmation message when the form is submitted
function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === ""  email === ""  message === "") {
    alert("Please fill in all the fields");
  } else {
    var confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation === true) {
      alert("Thank you for your message, we will get back to you as soon as possible");
      document.getElementById("contact-form").reset();
    }
  }
}

// Function to toggle the mobile navigation menu
function toggleMenu() {
  var menu = document.getElementById("mobile-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// Function to close the mobile navigation menu when a link is clicked
function closeMenu() {
  var menu = document.getElementById("mobile-menu");
  menu.style.display = "none";
}

// Event listener for the form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  submitForm();
});

// Event listener for the mobile menu toggle button
document.getElementById("mobile-menu-toggle").addEventListener("click", function(event) {
  event.preventDefault();
  toggleMenu();
});

// Event listeners for the mobile menu links
var links = document.querySelectorAll("#mobile-menu a");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    closeMenu();
  });
}