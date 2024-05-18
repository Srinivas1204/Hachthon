let expenseTable = [];

document.getElementById('form').addEventListener('submit', function(event) {
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    const expense = {
        id: Date.now(),
        amount,
        category,
        date
    };

    expenseTable.push(expense);
    displayExpenses();
    this.reset();
    event.preventDefault();
});

function displayExpenses() {
    const tbody = document.getElementById('etable').querySelector('tbody');
    tbody.innerHTML = '';

    expenseTable.forEach(expense => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><strong>${expense.amount}</strong></td>
            <td><strong>${expense.category}</strong></td>
            <td><strong>${expense.date}</strong></td>
            <td>
                <button class="edit" onclick="editExpense(${expense.id})">Edit</button>
                <button class="delete" onclick="deleteExpense(${expense.id})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editExpense(id) {
    const expense = expenseTable.find(exp => exp.id === id);
    if (expense) {
        document.getElementById('amount').value = expense.amount;
        document.getElementById('category').value = expense.category;
        document.getElementById('date').value = expense.date;

        deleteExpense(id);
    }
}

function deleteExpense(id) {
    expenseTable = expenseTable.filter(expense => expense.id !== id);
    displayExpenses();
}
