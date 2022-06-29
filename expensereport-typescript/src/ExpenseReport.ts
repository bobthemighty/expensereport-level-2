type ExpenseType = "dinner" | "breakfast" | "car-rental"

class Expense {
  constructor(public type: ExpenseType, public amount: number) {
  }

  get name() : string {
    switch(this.type) {
      case "dinner":
        return "Dinner"
      case "breakfast":
        return "Breakfast"
      case "car-rental":
        return "Car Rental"
    }
  }

  get isOverLimits() : boolean {
    return this.type == "dinner" && this.amount > 5000 || this.type == "breakfast" && this.amount > 1000 ? true: false
  }
}

function printReport(htmlMode: boolean, expenses: Expense[]) {
  let totalExpenses = 0
  let mealExpenses = 0

  if (htmlMode) {
    process.stdout.write("<!DOCTYPE html>\n");
    process.stdout.write("<html>\n");
    process.stdout.write("<head>\n");
    process.stdout.write("<title>Expense Report: " + new Date().toISOString().substr(0, 10) + "</title>\n")
    process.stdout.write("</head>\n");
    process.stdout.write("<body>\n");
    process.stdout.write("<h1>Expense Report: " + new Date().toISOString().substr(0, 10) + "</h1>\n")
  } else {
    process.stdout.write("Expense Report: " + new Date().toISOString().substr(0, 10) + "\n")
  }

  if (htmlMode) {
    process.stdout.write("<table>\n");
    process.stdout.write("<thead>\n");
    process.stdout.write("<tr><th scope=\"col\">Type</th><th scope=\"col\">Amount</th><th scope=\"col\">Over Limit</th></tr>\n");
    process.stdout.write("</thead>\n");
    process.stdout.write("<tbody>\n");
  }
  for (const expense of expenses) {
    if (expense.type == "dinner" || expense.type == "breakfast") {
      mealExpenses += expense.amount
    }


    const mealOverExpensesMarker = expense.isOverLimits ? "X" : " "

    if (htmlMode) {
        process.stdout.write("<tr><td>" + expense.name + "</td><td>" + expense.amount + "</td><td>" + mealOverExpensesMarker + "</td></tr>\n")
    } else {
        process.stdout.write(expense.name + "\t" + expense.amount + "\t" + mealOverExpensesMarker + "\n")
    }

    totalExpenses += expense.amount
  }
  if (htmlMode) {
    process.stdout.write("</tbody>\n");
    process.stdout.write("</table>\n");
  }

  if (htmlMode) {
    process.stdout.write("<p>Meal Expenses: " + mealExpenses + "</p>\n")
    process.stdout.write("<p>Total Expenses: " + totalExpenses + "</p>\n")
  } else {
    process.stdout.write("Meal Expenses: " + mealExpenses + "\n")
    process.stdout.write("Total Expenses: " + totalExpenses + "\n")
  }

  if (htmlMode) {
    process.stdout.write("</body>\n");
    process.stdout.write("</html>\n");
  }
}

export {printReport, Expense, ExpenseType}
