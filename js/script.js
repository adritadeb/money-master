// error
// function error(){

// }

// expense items input
function getInput(ExpenseItem) {
    // debugger;
    const expenseInput = document.getElementById(ExpenseItem + '-expense');
    const expenseInputText = expenseInput.value;
    const expenseAmount = parseFloat(expenseInputText);
    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
    if (isNaN(expenseInputText)) {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else if (expenseAmount < 0) {
        negativeNumberError.style.display = 'block';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
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
    const totalExpenses = document.getElementById('total-expenses');
    const totalExpensesAmount = totalExpenses.innerText;

    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
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

    // total expenses amount
    else {
        negativeNumberError.style.display = 'none';
        stringError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';


        const totalExpenses = document.getElementById('total-expenses');
        const totalExpensesAmount = totalExpenses.innerText;

        const totalBalance = document.getElementById('total-balance');
        totalBalance.innerText = incomeAmount - totalExpensesAmount;
    }
}
//calculate savings
function calculateSavings() {
    // debugger;
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInputText);

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const saveInput = document.getElementById('save-input');
    let saveInputText = saveInput.value;
    const saveAmount = parseFloat(saveInputText);

    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');

    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = (incomeAmount * saveAmount) / 100;
    saveInputText = savingAmount.innerText;

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

        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = (incomeAmount * saveAmount) / 100;

        saveInputText = savingAmount.innerText;
        //calculate remaining balance
        const remainingBalance = document.getElementById('remaining-balance');
        const totalBalance = document.getElementById('total-balance');
        const totalBalanceText = totalBalance.innerText;
        const totalBalanceAmount = parseFloat(totalBalanceText);
        remainingBalance.innerText = totalBalanceAmount - saveInputText;
    }
}

document.getElementById('calculate-button').addEventListener('click', function () {
    calculateExpenses();
    calculateBalance();
})
document.getElementById('save-button').addEventListener('click', function () {
    calculateSavings();
})