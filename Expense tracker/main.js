const description = document.querySelector(".name");
const amount = document.querySelector(".amount");
const date = document.querySelector(".date");
const btn = document.querySelector(".btn1");
const tr = document.querySelector(".tr");

btn.addEventListener("click", () => {
  let descriptionValue = document.createElement("td");
  descriptionValue.innerText = `${description.value}`;

  let dateValue = document.createElement("td");
  dateValue.innerText = `${date.value}`;

  let amountValue = document.createElement("td");
  amountValue.innerText = `#${amount.value}`;

  tr.appendChild(descriptionValue);
  tr.appendChild(dateValue);
  tr.appendChild(amountValue);

  description.value = "";
  date.value = "";
  amount.value = "";
});
