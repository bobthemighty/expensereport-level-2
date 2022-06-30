import { ExpensesReport, Expense, ExpensesWriter } from "./model"

class PlaintextWriter implements ExpensesWriter {
  writeHeader() {
    process.stdout.write("Expense Report: " + new Date().toISOString().substr(0, 10) + "\n")
  }

  writeItems(expenses: Iterable<Expense>) {
    for (const expense of expenses) {
      process.stdout.write(expense.name + "\t" + expense.amount + "\t" + (expense.isOverLimits ? "X" : " ") + "\n")
    }
  }

  writeTotal(expenses: ExpensesReport) {
    process.stdout.write("Meal Expenses: " + expenses.mealExpenses + "\n")
    process.stdout.write("Total Expenses: " + expenses.totalExpenses + "\n")
  }
}

class HtmlWriter implements ExpensesWriter {
  writeHeader() {
    process.stdout.write("<!DOCTYPE html>\n");
    process.stdout.write("<html>\n");
    process.stdout.write("<head>\n");
    process.stdout.write("<title>Expense Report: " + new Date().toISOString().substr(0, 10) + "</title>\n")
    process.stdout.write("</head>\n");
    process.stdout.write("<body>\n");
    process.stdout.write("<h1>Expense Report: " + new Date().toISOString().substr(0, 10) + "</h1>\n")
  }

  writeItems(expenses: ExpensesReport) {
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
  }

  writeTotal(expenses: ExpensesReport) {
    process.stdout.write("<p>Meal Expenses: " + expenses.mealExpenses + "</p>\n")
    process.stdout.write("<p>Total Expenses: " + expenses.totalExpenses + "</p>\n")

    process.stdout.write("</body>\n");
    process.stdout.write("</html>\n");
  }
}

function printReport(htmlMode: boolean, _expenses: Expense[]) {
  const report = new ExpensesReport(_expenses);
  const writer = htmlMode ? new HtmlWriter() : new PlaintextWriter();
  report.write(writer)
}

export { printReport, Expense }
