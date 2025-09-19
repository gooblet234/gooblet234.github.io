  window.addEventListener('DOMContentLoaded', (event) => {
    const encodedPasswords = ["MjM0MTQyMzQ=", "R01TMjAyNQ==", "bGltYnVzY29tcGFueQ==", "bWFpbnRlbmFuY2VmcmlkYXk="];
    const encodedPasswords2 = ["cGll", "Y3Vt"];
    
    const storedPassword = sessionStorage.getItem('password');
    const storedPassword2 = sessionStorage.getItem('password2');

    const isPasswordCorrect = storedPassword && encodedPasswords.includes(storedPassword);
    const isPassword2Correct = storedPassword2 && encodedPasswords2.includes(storedPassword2);
    
    if (!isPasswordCorrect || !isPassword2Correct) {
      alert("Access denied. Please log in.");
      window.location.href = "index.html"; 
    }
  });
