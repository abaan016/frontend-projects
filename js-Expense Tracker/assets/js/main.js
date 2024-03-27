window.onload = function () {
  const storedExpenses = JSON.parse(localStorage.getItem('expenses'));
  if (storedExpenses) {
    expenses = storedExpenses;
    updateExpenses();
    updateTotal();
  }
};

let expenses = [];
let totalExpense = 0;

function addExpense() {
  const nameInput = document.getElementById('expenseName');
  const amountInput = document.getElementById('expenseAmount');

  const name = nameInput.value;
  const amount = parseFloat(amountInput.value);

  if (name && amount) {
    expenses.push({ id: Date.now(), name, amount });
    updateExpenses();
    updateTotal();
    nameInput.value = '';
    amountInput.value = '';
    saveExpensesToLocalStorage();
  } else {
    Swal.fire("Please fill the fields!");;
  }
}

function updateExpenses() {
  const expensesList = document.getElementById('expensesList');
  expensesList.innerHTML = '';
  expenses.forEach(expense => {
    const expenseItem = document.createElement('div');
    expenseItem.classList.add('expense');
    expenseItem.innerHTML = `
              <span>${expense.name}: Rs ${expense.amount.toFixed(2)}</span>
              <button class="btn btn-sm text-success ms-5" onclick="editExpense(${expense.id})"><i class="fa-solid fa-pen-to-square"></i></button>
              <button class="btn btn-sm text-danger" onclick="deleteExpense(${expense.id})"><i class="fa-solid fa-trash"></i></button>
          `;
    expensesList.appendChild(expenseItem);
  });
}

function updateTotal() {
  totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total Amount: Rs ${totalExpense.toFixed(2)}`;
}

function saveExpensesToLocalStorage() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}
// Edit Expence item
function editExpense(id) {
  const expenseIndex = expenses.findIndex(expense => expense.id === id);
  if (expenseIndex !== -1) {
    const editedName = prompt('Enter new expense name:', expenses[expenseIndex].name);
    const editedAmount = parseFloat(prompt('Enter new expense amount:', expenses[expenseIndex].amount));
    if (editedName && editedAmount) {
      expenses[expenseIndex].name = editedName;
      expenses[expenseIndex].amount = editedAmount;
      updateExpenses();
      updateTotal();
      saveExpensesToLocalStorage(); 
    } else {
      alert('Please enter valid values!');
    }
  } else {
    alert('Expense not found!');
  }
}

// Delete Expense item
function deleteExpense(id) {
  const confirmDelete = Swal.fire({
    title: "Are you sure?",
    text: "delete this expense item!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Expense List item has been deleted.",
        icon: "success"
      });
      expenses = expenses.filter(expense => expense.id !== id);
      updateExpenses();
      updateTotal();
      saveExpensesToLocalStorage(); 
    }
  });
}
