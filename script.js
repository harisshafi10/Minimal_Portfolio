document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
  
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    alert("Thank you for your message! I'll get back to you soon.");
    
    // Clear form
    event.target.reset();
  });
  