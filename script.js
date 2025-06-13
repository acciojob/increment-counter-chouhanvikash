//your JS code here. If required.
  const counterPara = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");

    // Add event listener to the button
    incrementButton.addEventListener("click", function() {
      // Get current value and convert to number
      let currentValue = parseInt(counterPara.innerText);

      // Show alert with the un-incremented value
      alert("Current Value: " + currentValue);

      // Increment and update the counter
      currentValue++;
      counterPara.innerText = currentValue;
    });