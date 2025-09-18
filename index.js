  window.addEventListener('DOMContentLoaded', (event) => {
    const encodedPasswords = ["MjM0MTQyMzQ=", "R01TMjAyNQ==", "bGltYnVzY29tcGFueQ=="];
    const encodedPasswords2 = ["cGll"];
    
    const storedPassword = sessionStorage.getItem('password');
    const storedPassword2 = sessionStorage.getItem('password2');

    const isPassword1Correct = storedPassword && encodedPasswords.includes(storedPassword);
    const isPassword2Correct = storedPassword2 && encodedPasswords2.includes(storedPassword2);

    if (!isPassword1Correct || !isPassword2Correct) {
      alert("Access denied. Please log in.");
      window.location.href = "index.html"; 
    }
    sessionStorage.clear();
  });
