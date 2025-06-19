function squareCalculator() {
      return function(base) {
        return base * base;
      };
    }

    const calculate = squareCalculator();

    document.getElementById("calcBtn").addEventListener("click", function () {
      const input = document.getElementById("numberInput").value;
      const number = parseFloat(input);
      const resultDiv = document.getElementById("result");

      if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
      } else {
        const square = calculate(number);
        resultDiv.textContent = `${number}² = ${square}`;
      }
    });

    // Theme toggle logic
    document.querySelectorAll("[data-bs-theme-value]").forEach(btn => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-bs-theme-value");
        document.body.setAttribute("data-bs-theme", theme);
      });
    });