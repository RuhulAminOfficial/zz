document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission
  
  // Basic validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields');
    return;
  }

  // Here, you can perform additional validations or submit the form data via AJAX to a server
  // For demonstration, let's log the form data
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // You can also reset the form after submission if needed
  // document.getElementById('contactForm').reset();
});
