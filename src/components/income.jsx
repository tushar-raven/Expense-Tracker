import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

const Income = () => {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const [incomeArray, setIncomeArray] = useState([]);
  const [expenseArray, setExpenseArray] = useState([]);
  const [tag, setTag] = useState("");

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const tagArray = ["rent", "food", "entertainment"];

  const handleIncomeInput = (e) => {
    setIncome(parseInt(e.target.value));
  };

  const handleExpenseInput = (e) => {
    setExpense(parseInt(e.target.value));
  };

  const calculateTotal = () => {
    const incomeTotal = incomeArray.reduce((acc, item) => acc + item.value, 0);
    const expenseTotal = expenseArray.reduce(
      (acc, item) => acc + item.value,
      0
    );
    return incomeTotal - expenseTotal;
  };

  const handleTotal = (calc) => (e) => {
    e.preventDefault();
    if (calc === "add") {
      const incomeObject = { value: income, tag: tag };
      setIncomeArray((prevArray) => [...prevArray, incomeObject]);

      setIncome("");
    } else {
      const expenseObject = { value: expense, tag: "salary" };
      setExpenseArray((prevArray) => [...prevArray, expenseObject]);

      setExpense("");
    }
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
        <select onChange={handleTag} required>
          <option value="">Select Tag</option>
          {tagArray.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
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

      <div>{calculateTotal()}</div>
      <div>
        {incomeArray.map((item, index) => (
          <div key={index}>
            {item.value} - {item.tag}
          </div>
        ))}
      </div>
      <div>
        {expenseArray.map((item, index) => (
          <div key={index}>
            {item.value} - {item.tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Income };
