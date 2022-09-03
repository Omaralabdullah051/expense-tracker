import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  editActive,
  removeTransaction,
} from "../../features/transaction/transactionSlice";
import numberWithCommas from "../../utils/numberWithCommas";

const Transaction = ({ transaction }) => {
  const { id, name, type, amount } = transaction || {};
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  const handleDelete = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>{numberWithCommas(amount)}</p>
        <button onClick={handleEdit} className="link">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button onClick={handleDelete} className="link">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
