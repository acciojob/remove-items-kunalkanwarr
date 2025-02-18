// Get references to the dropdown and the button
const colorSelect = document.getElementById("colorSelect");
const removeButton = document.getElementById("removeButton");

// Function to remove the selected color from the dropdown
const removeSelectedColor = () => {
  // Get the selected option from the dropdown
  const selectedOption = colorSelect.options[colorSelect.selectedIndex];

  // If a color is selected, remove it from the list
  if (selectedOption) {
    colorSelect.removeChild(selectedOption);
  }
};

// Add an event listener to the button to trigger the removal when clicked
removeButton.addEventListener("click", removeSelectedColor);
