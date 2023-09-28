const btn = document.querySelector(".btn1");
const expenseTableBody = document.getElementById("expenseTableBody");

btn.addEventListener("click", () => {
  // Get the input values
  const descriptionInput = document.querySelector(".name").value;
  const dateInput = document.querySelector(".date").value;
  const amountInput = document.querySelector(".amount").value;

  // Create a new table row
  const newRow = document.createElement("tr");

  // Create and append table data (td) elements to the new row
  const descriptionValue = document.createElement("td");
  descriptionValue.innerText = descriptionInput;

  const dateValue = document.createElement("td");
  dateValue.innerText = dateInput;

  const amountValue = document.createElement("td");
  amountValue.innerText = `#${amountInput}`;

  newRow.appendChild(descriptionValue);
  newRow.appendChild(dateValue);
  newRow.appendChild(amountValue);

  // Append the new row to the table body
  expenseTableBody.appendChild(newRow);

  // Clear the input fields
  document.querySelector(".name").value = "";
  document.querySelector(".date").value = "";
  document.querySelector(".amount").value = "";
});
