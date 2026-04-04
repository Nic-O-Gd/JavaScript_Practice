// Get references to DOM elements by their IDs
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const orderNo = document.getElementById("order-no");
const productCode = document.getElementById("product-code");
const quantity = document.getElementById("quantity");
const complaintsGroup = document.getElementById("complaints-group");
const complaintDesc = document.getElementById("complaint-description");
const solutionsGroup = document.getElementById("solutions-group");
const solutionDesc = document.getElementById("solution-description");
const form = document.getElementById("form");

// Define validateForm that return an object containing the following keys: full-name, email, order-no, product-code, quantity, complaints-group, complaint-description, solutions-group, and solution-description
function validateForm() {
  const otherComplaint = document.querySelector('#other-complaint');
  const complaintDescription = document.querySelector('#complaint-description');
  const isComplaintDescriptionValid = !otherComplaint.checked || complaintDescription.value.trim().length >= 20;
  const otherSolution = document.querySelector('#other-solution');
  const solutionDescription = document.querySelector('#solution-description');
  const isSolutionDescriptionValid = !otherSolution.checked || solutionDescription.value.trim().length >= 20;
  return {
    "full-name": fullName.value.length > 0,
    "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
    "order-no": /^2024\d{6}$/.test(orderNo.value),
    "product-code": /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(productCode.value),
    "quantity": /^[1-9]\d*$/.test(quantity.value),
    "complaints-group": Array.from(complaintsGroup.querySelectorAll('input[type="checkbox"]')).some(checkbox => checkbox.checked),
    "complaint-description": isComplaintDescriptionValid,
    "solutions-group": Array.from(solutionsGroup.querySelectorAll('input[type="radio"]')).some(radio => radio.checked),
    "solution-description": isSolutionDescriptionValid
  }
};

// Define isValid that takes the object returned by validateForm as argument and returns true if every form field is correctly filled and false otherwise.
function isValid(validationResults) {
  return Object.values(validationResults).every(value => value);
}

fullName.addEventListener("change", () => {
  if (validateForm()["full-name"]) {
    fullName.style.borderColor = "green";
  } else {
    fullName.style.borderColor = "red";
  }
});
email.addEventListener("change", () => {
  if (validateForm()["email"]) {
    email.style.borderColor = "green";
  } else {
    email.style.borderColor = "red";
  }
});
orderNo.addEventListener("change", () => {
  if (validateForm()["order-no"]) {
    orderNo.style.borderColor = "green";
  } else {
    orderNo.style.borderColor = "red";
  }
});
productCode.addEventListener("change", () => {
  if (validateForm()["product-code"]) {
    productCode.style.borderColor = "green";
  } else {
    productCode.style.borderColor = "red";
  }
});
quantity.addEventListener("change", () => {
  if (validateForm()["quantity"]) {
    quantity.style.borderColor = "green";
  } else {
    quantity.style.borderColor = "red";
  }
});
complaintsGroup.addEventListener("change", () => {
  if (validateForm()["complaints-group"]) {
    complaintsGroup.style.borderColor = "green";
  } else {
    complaintsGroup.style.borderColor = "red";
  }
});
complaintDesc.addEventListener("change", () => {
  if (validateForm()["complaint-description"]) {
    complaintDesc.style.borderColor = "green";
  } else {
    complaintDesc.style.borderColor = "red";
  }
});
solutionsGroup.addEventListener("change", () => {
  if (validateForm()["solutions-group"]) {
    solutionsGroup.style.borderColor = "green";
  } else {
    solutionsGroup.style.borderColor = "red";
  }
});
solutionDesc.addEventListener("change", () => {
  if (validateForm()["solution-description"]) {
    solutionDesc.style.borderColor = "green";
  } else {
    solutionDesc.style.borderColor = "red";
  }
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const results = validateForm();
  if (!isValid(results)) {
    if (!results["full-name"]) fullName.style.borderColor = "red";
    if (!results["email"]) email.style.borderColor = "red";
    if (!results["order-no"]) orderNo.style.borderColor = "red";
    if (!results["product-code"]) productCode.style.borderColor = "red";
    if (!results["quantity"]) quantity.style.borderColor = "red";
    if (!results["complaints-group"]) complaintsGroup.style.borderColor = "red";
    if (!results["complaint-description"]) complaintDesc.style.borderColor = "red";
    if (!results["solutions-group"]) solutionsGroup.style.borderColor = "red";
    if (!results["solution-description"]) solutionDesc.style.borderColor = "red";
  }
})
