import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../features/transaction/transactionSlice";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useSelector(
    (state) => state.transaction
  );

  const handleCreate = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        type,
        amount: Number(amount),
      })
    );
  };

  return (
    <div className="form">
      <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group radio">
          <label for="transaction_type">Type</label>
          <div className="radio_group">
            <input
              type="radio"
              value="income"
              name="type"
              checked={type === "income"}
              required
              onChange={() => setType("income")}
            />
            <label>Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              value="expense"
              name="type"
              placeholder="Expense"
              required
              checked={type === "Expense"}
              onChange={() => setType("Expense")}
            />
            <label>Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            placeholder="enter amount"
            value={amount}
            required
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button disabled={isLoading} type="submit" className="btn">
          Add Transaction
        </button>

        {!isLoading && isError && (
          <p className="error">There was an error occured</p>
        )}
      </form>

      <button className="btn cancel_edit">Cancel Edit</button>
    </div>
  );
};

export default Form;
