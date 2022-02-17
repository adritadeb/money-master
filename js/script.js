// expense items
function getInput(ExpenseItem) {
    // expense input
    const expenseInput = document.getElementById(ExpenseItem + '-expense');
    const expenseInputText = expenseInput.value;
    const expenseAmount = parseFloat(expenseInputText);
    // errors
    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
    // through error
    if (isNaN(expenseInputText)) {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else if (expenseAmount < 0) {
        stringError.style.display = 'none';
        negativeNumberError.style.display = 'block';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else {
        stringError.style.display = 'none';
        negativeNumberError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
        return expenseAmount;
    }

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
    // income input
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);
    // total expense
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount = totalExpenses.innerText;
    //  errors
    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
    // through error
    if (isNaN(incomeInputText)) {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else if (incomeAmount < 0) {
        negativeNumberError.style.display = 'block';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else if (totalExpensesAmount > incomeAmount) {
        expensesError.style.display = 'block'
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
    }
    else {
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
        // total balance
        const totalBalance = document.getElementById('total-balance');
        totalBalance.innerText = incomeAmount - totalExpensesAmount;
    }
}
//calculate savings
function calculateSavings() {
    // income input
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);
    // total balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);
    //  save input
    const saveInput = document.getElementById('save-input');
    let saveInputText = saveInput.value;
    const saveAmount = parseFloat(saveInputText);
    // saving amount
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (incomeAmount * saveAmount) / 100;
    saveInputText = savingAmount.innerText;
    // errors
    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
    // through error
    if (isNaN(saveInputText)) {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        expensesError.style.display = 'none';
        savingsError.style.display = 'none';
    }
    else if (saveAmount < 0) {
        negativeNumberError.style.display = 'block';
        stringError.style.display = 'none';
        expensesError.style.display = 'none';
        savingsError.style.display = 'none'
    }
    else if (totalBalanceAmount < saveInputText) {
        savingsError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else {
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
        //calculate remaining balance
        const remainingBalance = document.getElementById('remaining-balance');
        remainingBalance.innerText = totalBalanceAmount - saveInputText;
    }
}
// calculate balance
document.getElementById('calculate-button').addEventListener('click', function () {
    calculateExpenses();
    calculateBalance();
})
// calculate saving
document.getElementById('save-button').addEventListener('click', function () {
    calculateSavings();
})