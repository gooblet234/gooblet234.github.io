    window.addEventListener('DOMContentLoaded', (event) => {
      const encodedPasswords = ["MjM0MTQyMzQ=", "R01TMjAyNQ==", "bGltYnVzY29tcGFueQ=="];
      
      const storedPassword = sessionStorage.getItem('password');

      if (!storedPassword || !encodedPasswords.includes(storedPassword)) {
        sessionStorage.clear();
        alert("Access denied. Please log in.");
        window.location.href = "index.html"; 
      }
    });
