window.onload = function() {
    const btn1 = document.getElementById("btn1");
    const resultDiv = document.getElementById("resultDiv");
  
    generateBtn.addEventListener("click", function() {
      const numbers = generateRandomNumbers();
      resultDiv.textContent = numbers.join(", ");
    });

    array1[0] = '귤';
    array1[1] = '사과';
    array1[2] = '자몽';
  
    function generateRandomNumbers() {
      const numbers = [];
      while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }

    }
  };
  