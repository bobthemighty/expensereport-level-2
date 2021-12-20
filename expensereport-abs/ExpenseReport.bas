DINNER = 0: BREAKFAST = 1: CARRENTAL = 2
DIM type(5), amount(5)
type(0) = DINNER: amount(0) = 5000
type(1) = DINNER: amount(1) = 5001
type(2) = BREAKFAST: amount(2) = 1000
type(3) = BREAKFAST: amount(3) = 1001
type(4) = CARRENTAL: amount(4) = 4
htmlMode = 1

GOSUB PrintExpenses
END

PrintExpenses:
    meals = 0
    total = 0
    IF htmlMode THEN
        PRINT "<!DOCTYPE html>"
        PRINT "<html lang=" CHR$(34) "en" CHR$(34) ">"
        PRINT "<head>"
        PRINT "<title>Expense Report " DATE$ "</title>"
        PRINT "</head>"
        PRINT "<body>"
        PRINT "<h1>Expenses " DATE$ "</h1>"
    ELSE
        PRINT "Expensereport: " DATE$
    END IF

    IF htmlMode THEN
        PRINT "<table>"
        PRINT "<thead>"
        PRINT "<tr><th scope=" CHR$(34) "col" CHR$(34) ">Type</th><th scope=" CHR$(34) "col" CHR$(34) ">Amount</th><th scope=" CHR$(34) "col" CHR$(34) ">Over Limit</th></tr>"
        PRINT "</thead>"
        PRINT "<tbody>"
    END IF

    FOR i=0 TO 4
        IF type(i) = DINNER OR type(i) = BREAKFAST THEN meals = meals + amount(i)
        expenseName$ = ""
        IF type(i) = DINNER THEN expenseName$ = "Dinner"
        IF type(i) = BREAKFAST THEN expenseName$ = "Breakfast"
        IF type(i) = CARRENTAL THEN expenseName$ = "Car Rental"
        IF type(i) = DINNER AND amount(i) > 5000 OR type(i) = BREAKFAST AND amount(i) > 1000 THEN mealOverExpensesMarker$ = "X" ELSE mealOverExpensesMarker$ = " "
        IF htmlMode THEN
            PRINT "<tr><td>" expenseName$ "</td><td>" STR$(amount(i)) "</td><td>" mealOverExpensesMarker$ "</td></tr>"
        ELSE
            PRINT expenseName$ CHR$(9) STR$(amount(i)) CHR$(9) mealOverExpensesMarker$
        END IF
        total = total + amount(i)

    NEXT i

    IF htmlMode THEN
        PRINT "</tbody>"
        PRINT "</table>"
    END IF

    IF htmlMode THEN
        PRINT "<p>Meal expenses:" STR$(meals) "</p>"
        PRINT "<p>Total expenses:" STR$(total) "</p>"
    ELSE
        PRINT "Meal Expenses:" STR$(meals)
        PRINT "Total Expenses:" STR$(total)
    END IF

    IF htmlMode THEN
        PRINT "</body>"
        PRINT "</html>"
    END IF
    RETURN
