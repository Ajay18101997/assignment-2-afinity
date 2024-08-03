import React from "react";
import "./LoanTableRow.css";
import { CONSTANT } from "../../constant";

const LoanTableRow = ({
  srNo,
  loanMoney,
  leftToPay,
  duration,
  interestRate,
  installment,
  isTotal,
}) => {
  return (
    <div className={`loan-table-row ${isTotal ? "total-row" : ""}`}>
      <div className="cell">{srNo}</div>
      <div className="cell">{loanMoney}</div>
      <div className="cell">{leftToPay}</div>
      <div className="cell">{duration}</div>
      <div className="cell">{interestRate}</div>
      <div className="cell">{installment}</div>
      <div className="cell">
        {!isTotal && <button className="repay-btn">{CONSTANT.REPAY_BTN_TEXT}</button>}
      </div>
    </div>
  );
};

export default LoanTableRow;
