 // Regex validation for contact form
document.getElementById('contact-form').addEventListener('submit', function (event) {
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (email.trim() === '' || message.trim() === '') {
    alert('Please fill out all required fields.');
    event.preventDefault();
  }
});
