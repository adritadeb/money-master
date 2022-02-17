// calculate total expenses
function calculateExpenses() {
    // errors
    const stringError = document.getElementById('string-error');
    const negativeNumberError = document.getElementById('negative-number-error');
    const savingsError = document.getElementById('savings-error');
    const expensesError = document.getElementById('expenses-error');
    // food input
    const foodInput = document.getElementById('food-expense');
    const foodText = foodInput.value;
    //rent input
    const rentInput = document.getElementById('rent-expense');
    const rentText = rentInput.value;
    // clothes input
    const clothesInput = document.getElementById('clothes-expense');
    const clothesText = clothesInput.value;
    // through error
    if (isNaN(foodText) || isNaN(rentText) || isNaN(clothesText)) {
        stringError.style.display = 'block';
        negativeNumberError.style.display = 'none';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else if (foodText < 0 || rentText < 0 || clothesText < 0) {
        stringError.style.display = 'none';
        negativeNumberError.style.display = 'block';
        savingsError.style.display = 'none';
        expensesError.style.display = 'none';
    }
    else {
        const foodAmount = parseFloat(foodText);
        const rentAmount = parseFloat(rentText);
        const clothesAmount = parseFloat(clothesText);

        const totalExpenses = document.getElementById('total-expenses');
        totalExpenses.innerText = foodAmount + rentAmount + clothesAmount;
        return totalExpenses.innerText;
    }
}
// income input
function incomeInput() {
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    return incomeInputText;
}
// calculate total balance
function calculateBalance() {
    // income input
    const incomeInputText = incomeInput();
    const incomeAmount = parseFloat(incomeInputText);
    // total expense
    const totalExpensesAmount = calculateExpenses();
    // errors
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
        const totalBalance = document.getElementById('total-balance');
        totalBalance.innerText = incomeAmount - totalExpensesAmount;
    }
}
//calculate savings
function calculateSavings() {
    // income input
    const incomeInputText = incomeInput();
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