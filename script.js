document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.getElementById("calculate-btn");
    const clearBtn = document.getElementById("clear-btn");
    const resultDiv = document.getElementById("result");
  
    calculateBtn.addEventListener("click", function () {
      const dobInput = document.getElementById("dob").value;
      const dob = new Date(dobInput);
      const today = new Date();

      clearBtn.addEventListener("click", function () {
        dobInput.value = "";
        resultDiv.textContent = "";
    });
  
      if (dob >= today) {
        resultDiv.textContent = "Invalid date of birth!";
        return;
      }
  
      const ageInMilliseconds = today - dob;
      const ageDate = new Date(ageInMilliseconds);
  
      const years = ageDate.getUTCFullYear() - 1970;
      const months = ageDate.getUTCMonth();
      const days = ageDate.getUTCDate() - 1;
  
      resultDiv.textContent = `Your age is: ${years} years, ${months} months, and ${days} days.`;
    });
  });
  