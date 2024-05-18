let expenses = [];

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const expense = {
        id: Date.now(),
        amount,
        category,
        date
    };

    expenses.push(expense);
    displayExpenses();
    this.reset();
});

function displayExpenses() {
    const tbody = document.getElementById('etable').querySelector('tbody');
    tbody.innerHTML = '';

    expenses.forEach(expense => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${expense.amount}</td>
            <td>${expense.category}</td>
            <td>${expense.date}</td>
            <td>
                <button class="edit" onclick="editExpense(${expense.id})">Edit</button>
                <button class="delete" onclick="deleteExpense(${expense.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editExpense(id) {
    const expense = expenses.find(exp => exp.id === id);
    if (expense) {
        document.getElementById('amount').value = expense.amount;
        document.getElementById('category').value = expense.category;
        document.getElementById('date').value = expense.date;

        deleteExpense(id);
    }
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    displayExpenses();
}