document.addEventListener('DOMContentLoaded', function() {
    var passwordInput = document.getElementById('password');
    var strengthMessage = document.getElementById('strength-message');
    var strengthValue = document.getElementById('strength-value');
    var errorMessage = document.getElementById('error-message');
    var form = document.querySelector('.login-form');

    if (passwordInput && strengthMessage && strengthValue && errorMessage && form) {
        passwordInput.addEventListener('input', function() {
            var password = this.value;
            var strength = 'Weak';
            
            var hasUpperCase = /[A-Z]/.test(password);
            var hasNumbers = /[0-9]/.test(password);
            var hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            var isLongEnough = password.length > 8;

            if (isLongEnough && hasUpperCase && hasNumbers && hasSpecialChars) {
                strength = 'Strong';
            } else if (password.length > 6 && (hasUpperCase || hasNumbers || hasSpecialChars)) {
                strength = 'Medium';
            }

            strengthMessage.style.display = 'block';
            strengthValue.textContent = strength;
            strengthValue.className = 'strength ' + strength.toLowerCase();
        });

        form.addEventListener('submit', function(event) {
            if (strengthValue.textContent === 'Weak') {
                errorMessage.style.display = 'block';
                event.preventDefault(); // Prevent form submission
            } else {
                errorMessage.style.display = 'none';
            }
        });
    } else {
        console.error("One or more elements are not found!");
    }
});
