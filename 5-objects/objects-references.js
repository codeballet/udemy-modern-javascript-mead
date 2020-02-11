let myAccount = {
  name: 'Andrew',
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount
}

// addIncome
let addIncome = function (account, amount) {
  account.income = account.income + amount
}

// resetAccount
let resetAccount = function (account) {
  account.expenses = 0
  account.income = 0
}

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

// addIncome
addIncome(myAccount, 1000)

// addExpense
addExpense(myAccount, 100)

// addExpense
addExpense(myAccount, 2.50)

// getAccountSummary
console.log(getAccountSummary(myAccount))

// resetAccount
resetAccount(myAccount)

// getAccountSummary
console.log(getAccountSummary(myAccount))
