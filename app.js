let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const list = document.getElementById("list");
const totalValue = document.getElementById("total");
const addBtn = document.getElementById("add");

function updateUI() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((item, index) => {
    total += item.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} — $${item.amount} (${item.category})</span>
      <button onclick="removeExpense(${index})">X</button>
    `;
    list.appendChild(li);
  });

  totalValue.textContent = total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function addExpense() {
  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const category = categoryInput.value;

  if (!name || !amount) return alert("Enter name & amount!");

  expenses.push({ name, amount, category });
  updateUI();

  nameInput.value = "";
  amountInput.value = "";
}

function removeExpense(index) {
  expenses.splice(index, 1);
  updateUI();
}

addBtn.addEventListener("click", addExpense);
updateUI();