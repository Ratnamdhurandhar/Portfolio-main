var typed=new Typed(".typing",{
    strings:["Full-Stack Developer.","Frontend Developer.","Web Developer.","Web Designer"],
  typeSpeed:50,
  backSpeed:60,
  
  loop:true
  });



 //==============================================//
 document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Clear form fields
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('subject').value = '';
      document.getElementById('message').value = '';
  });
});
