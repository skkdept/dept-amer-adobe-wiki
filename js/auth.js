// Password protection logic — shared across all pages
(function () {
  var CORRECT_PASSWORD = 'adobe!';
  var passwordSection = document.getElementById('password-section');
  var contentSection = document.getElementById('content');
  var passwordInput = document.getElementById('password-input');
  var passwordButton = document.getElementById('password-button');

  if (!passwordSection || !contentSection || !passwordInput || !passwordButton) return;

  function handleAuth() {
    if (passwordInput.value === CORRECT_PASSWORD) {
      sessionStorage.setItem('authenticated', 'true');
      passwordSection.classList.remove('active');
      contentSection.classList.remove('hidden');
      passwordInput.value = '';
    } else {
      passwordInput.value = '';
      passwordInput.placeholder = '❌ Incorrect password';
      passwordInput.style.borderColor = '#cd2a18';
      passwordInput.focus();
    }
  }

  passwordButton.addEventListener('click', handleAuth);
  passwordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') handleAuth();
  });

  // Check if already authenticated
  if (sessionStorage.getItem('authenticated') === 'true') {
    passwordSection.classList.remove('active');
    contentSection.classList.remove('hidden');
  } else {
    passwordInput.focus();
  }
})();
