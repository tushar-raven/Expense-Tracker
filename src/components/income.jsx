import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

const Income = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [total, setTotal] = useState(0);

  const handleIncomeInput = (e) => {
    setIncome(parseInt(e.target.value));
  };

  const handleExpenseInput = (e) => {
    setExpense(parseInt(e.target.value));
  };

  const handleTotal = (calc) => (e) => {
    e.preventDefault();
    if (calc === "add") {
      setTotal((prevTotal) => prevTotal + income);
    } else {
      setTotal((prevTotal) => prevTotal - expense);
    }
    setIncome("");
  };

  return (
    <div>
      <form onSubmit={handleTotal("add")}>
        <Input
          type="number"
          placeholder="Add Income"
          entry={income}
          handleFunc={handleIncomeInput}
        />
        <Button buttonName="Add" />
      </form>

      <form onSubmit={handleTotal("sub")}>
        <Input
          type="number"
          placeholder="Add Expense"
          entry={expense}
          handleFunc={handleExpenseInput}
        />
        <Button buttonName="Subtract" />
      </form>

      <div>{total}</div>
    </div>
  );
};

export { Income };
