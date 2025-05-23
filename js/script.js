   const form = document.getElementById('contactForm');
    const errorName = document.getElementById('errorName');
    const errorEmail = document.getElementById('errorEmail');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    function validateEmail(email) {
      // Basic email regex
      const re = /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
      return re.test(email.toLowerCase());
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      let valid = true;

      // Reset errors and success
      errorName.style.display = 'none';
      errorEmail.style.display = 'none';
      errorMessage.style.display = 'none';
      successMessage.style.display = 'none';

      // Validate name
      if (!form.name.value.trim()) {
        errorName.style.display = 'block';
        valid = false;
      }

      // Validate email
      if (!form.email.value.trim() || !validateEmail(form.email.value.trim())) {
        errorEmail.style.display = 'block';
        valid = false;
      }

      // Validate message
      if (!form.message.value.trim()) {
        errorMessage.style.display = 'block';
        valid = false;
      }

      if (valid) {
        // Normally here you would send data to server or use an API; for now just show success message
        successMessage.style.display = 'block';
        form.reset();
      }
    });