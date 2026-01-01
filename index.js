// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.
// Step 4: Reusable Utilities
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

// Step 2: DOM Manipulation Functions
function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  const element = createElement("p", text);
  container.appendChild(element);
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.remove();
  }
}

// Step 1: Simulate User Behavior
function simulateClick(containerId, text) {
  const container = document.getElementById(containerId);
  const element = createElement("p", text);
  container.appendChild(element);
}

// Step 3: Error Handling & Form Submission
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  const input = form.querySelector("input");
  const errorMessage = document.getElementById("error-message");
  const container = document.getElementById(containerId);

  // Check for empty input
  if (!input.value || input.value.trim() === "") {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    return;
  }

  // Clear error message on success
  errorMessage.textContent = "";
  errorMessage.classList.add("hidden");

  // Add input value to DOM
  const element = createElement("p", input.value);
  container.appendChild(element);

  // Clear input
  input.value = "";
}

// Export functions for testing
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit
};