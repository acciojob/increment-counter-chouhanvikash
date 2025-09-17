//your JS code here. If required.
  const counterPara = document.getElementById("counter");
    const incrementButton = document.getElementById("incrementBtn");

    // Add event listener to the button
    incrementButton.addEventListener("click", function() {
  let currentValue = parseInt(counterPara.innerText);

  // Show alert with just the un-incremented value
  alert(currentValue);

  // Increment and update the counter
  currentValue++;
  counterPara.innerText = currentValue;
});
