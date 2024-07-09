var typed=new Typed(".typing",{
    strings:["Full-Stack Developer.","Frontend Developer.","Web Developer.","Web Designer"],
  typeSpeed:50,
  backSpeed:60,
  
  loop:true
  });



 //==============================================//

    document.getElementById('contactForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            alert('Your message has been sent successfully!');
            form.reset();
        } else {
            alert('There was a problem with your submission. Please try again.');
        }
    });


