    window.addEventListener('DOMContentLoaded', (event) => {
      const encodedPasswords = ["MjM0MTQyMzQ=", "R01TMjAyNQ==", "bGltYnVzY29tcGFueQ=="];
      const encodedPasswords2 = ["cGll"];
      
      const storedPassword = sessionStorage.getItem('password');
      const storedPassword2 = sessionStorage.getItem('password2');

      if (storedPassword && encodedPasswords.includes(storedPassword) &&
          storedPassword2 && encodedPasswords2.includes(storedPassword2)) {
        sessionStorage.clear();
        alert("Access denied. Please log in.");
        window.location.href = "index.html"; 
      }
    });
