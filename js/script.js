// expense items input
function getInput(ExpenseItem) {
    const expenseInput = document.getElementById(ExpenseItem + '-expense');
    const expenseInputText = expenseInput.value;
    const expenseAmount = parseFloat(expenseInputText);
    return expenseAmount;
}
// calculate total expenses
function calculateExpenses() {
    const foodAmount = getInput('food');
    const rentAmount = getInput('rent');
    const clothesAmount = getInput('clothes');

    const totalExpenses = document.getElementById('total-expenses');
    totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
}
// calculate total balance
function calculateBalance() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);
    // total expenses amount
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount = totalExpenses.innerText;

    const totalBalance = document.getElementById('total-balance');

    totalBalance.innerText = incomeAmount - totalExpensesAmount;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    calculateExpenses();
    calculateBalance();
})