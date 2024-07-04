document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', async function (event) {
      event.preventDefault();

      // Perform client-side validation
      if (!form.checkValidity()) {
          event.stopPropagation();
          form.classList.add('was-validated');
          return;
      }

      // Prepare form data
      const formData = new FormData(form);

      try {
          // Submit form data via AJAX
          const response = await fetch(form.action, {
              method: 'POST',
              body: formData,
              headers: {
                  'Accept': 'application/json'
              }
          });

          if (response.ok) {
              formMessage.textContent = 'Thank you for your message! My team will get back to you soon.';
              formMessage.className = 'alert alert-success';
              form.reset();
              form.classList.remove('was-validated');
          } else {
              throw new Error('Network response was not ok.');
          }
      } catch (error) {
          formMessage.textContent = 'There was a problem submitting the form. Please try again later.';
          formMessage.className = 'alert alert-danger';
      }
  });
});
