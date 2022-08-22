type ExpenseType = "dinner" | "breakfast" | "car-rental"

export class Expense {
  constructor(public type: ExpenseType, public amount: number) {
  }

  get name(): string {
    switch (this.type) {
      case "dinner":
        return "Dinner"
      case "breakfast":
        return "Breakfast"
      case "car-rental":
        return "Car Rental"
    }
  }

  get isOverLimits(): boolean {
    return this.type == "dinner" && this.amount > 5000 || this.type == "breakfast" && this.amount > 1000 ? true : false
  }
}

export class ExpensesReport implements Iterable<Expense> {
  constructor(private items: Array<Expense>) { }

  [Symbol.iterator](): Iterator<Expense> {
    return this.items[Symbol.iterator]();
  }

  get mealExpenses(): number {
    return this.items.filter(x => x.type !== "car-rental").reduce((acc, x) => acc + x.amount, 0)
  }

  get totalExpenses(): number {
    return this.items.reduce((acc, x) => acc + x.amount, 0)
  }

  write(writer: ExpensesWriter): void {
    writer.writeHeader()
    writer.writeItems(this)
    writer.writeTotal(this)
  }
}

export interface ExpensesWriter {
  writeHeader(): void
  writeItems(expenses: ExpensesReport): void
  writeTotal(expenses: ExpensesReport): void
}
