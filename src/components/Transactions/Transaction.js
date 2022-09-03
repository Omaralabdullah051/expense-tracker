import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Transaction = ({ transaction }) => {
  const { name, type, amount } = transaction || {};

  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>{amount}</p>
        <button className="link">
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="link">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
