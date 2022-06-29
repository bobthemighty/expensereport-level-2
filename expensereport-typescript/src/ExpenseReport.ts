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

class Expenses implements Iterable<Expense> {
  constructor (private items: Array<Expense>){}

  [Symbol.iterator]() : Iterator<Expense> {
    return this.items[Symbol.iterator]();
  }

  get mealExpenses() {
    return this.items.filter(x => x.type !== "car-rental").reduce((acc, x) => acc + x.amount, 0)
  }

  get totalExpenses() {
    return this.items.reduce((acc, x) => acc + x.amount, 0)
  }
}

class PlaintextWriter {
  writeHeader() {
    process.stdout.write("Expense Report: " + new Date().toISOString().substr(0, 10) + "\n")
  }

  writeItems(expenses: Iterable<Expense>) {
    for (const expense of expenses) {
      process.stdout.write(expense.name + "\t" + expense.amount + "\t" + (expense.isOverLimits? "X": " ") + "\n")
    }
  }

  writeTotal(expenses: Expenses) {
    process.stdout.write("Meal Expenses: " + expenses.mealExpenses + "\n")
    process.stdout.write("Total Expenses: " + expenses.totalExpenses + "\n")
  }
}

function printReport(htmlMode: boolean, _expenses: Expense[]) {
  const expenses = new Expenses(_expenses);
  const writer = new PlaintextWriter();

  if(!htmlMode){
    writer.writeHeader()
    writer.writeItems(expenses)
    writer.writeTotal(expenses)
    return
  }

    process.stdout.write("<!DOCTYPE html>\n");
    process.stdout.write("<html>\n");
    process.stdout.write("<head>\n");
    process.stdout.write("<title>Expense Report: " + new Date().toISOString().substr(0, 10) + "</title>\n")
    process.stdout.write("</head>\n");
    process.stdout.write("<body>\n");
    process.stdout.write("<h1>Expense Report: " + new Date().toISOString().substr(0, 10) + "</h1>\n")

    process.stdout.write("<table>\n");
    process.stdout.write("<thead>\n");
    process.stdout.write("<tr><th scope=\"col\">Type</th><th scope=\"col\">Amount</th><th scope=\"col\">Over Limit</th></tr>\n");
    process.stdout.write("</thead>\n");
    process.stdout.write("<tbody>\n");


    for (const expense of expenses) {
      const mealOverExpensesMarker = expense.isOverLimits ? "X" : " "
      process.stdout.write("<tr><td>" + expense.name + "</td><td>" + expense.amount + "</td><td>" + mealOverExpensesMarker + "</td></tr>\n")
    }
    process.stdout.write("</tbody>\n");
    process.stdout.write("</table>\n");

    process.stdout.write("<p>Meal Expenses: " + expenses.mealExpenses + "</p>\n")
    process.stdout.write("<p>Total Expenses: " + expenses.totalExpenses + "</p>\n")

    process.stdout.write("</body>\n");
    process.stdout.write("</html>\n");
}

export {printReport, Expense, ExpenseType}
