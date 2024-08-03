import React from "react";
import LoanTag from "../LoanTag/LoanTag.js";
import LoanTableRow from "../LoanTableRow/LoanTableRow.js";
import { CONSTANT } from "../../constant.js";

const Loans = () => {
  const totalLoanMoney = CONSTANT.LOAN_DATA.reduce(
    (acc, loan) =>
      acc + parseFloat(loan.loanMoney.replace("$", "").replace(",", "")),
    0
  );
  const totalLeftToPay = CONSTANT.LOAN_DATA.reduce(
    (acc, loan) =>
      acc + parseFloat(loan.leftToPay.replace("$", "").replace(",", "")),
    0
  );
  const totalInstallment = CONSTANT.LOAN_DATA.reduce((acc, loan) => {
    const installment = parseFloat(
      loan.installment.replace("$", "").replace(",", "").replace("/month", "")
    );
    return acc + installment;
  }, 0);
  return (
    <div className="loans">
      <div className="top-wrap">
        {CONSTANT.LOAN_TAG_DATA.map((data, index) => {
          return (
            <LoanTag
              key={index}
              type={data.type}
              amount={data.amount}
              icon={data.icon}
              bgColor={data.bgColor}
            />
          );
        })}
      </div>
      <h1 className="heading">{CONSTANT.LOAN_HEADING}</h1>
      <div className="loan-table">
        <div className="loan-table-row heading-row">
          {CONSTANT.TABLE_HEADER.map((value, index) => {
            return(
              <div className="cell" key={index}>{value}</div>
            )
          })}
        </div>
        {CONSTANT.LOAN_DATA.map((loan, index) => (
          <LoanTableRow
            key={index}
            srNo={loan.srNo}
            loanMoney={loan.loanMoney}
            leftToPay={loan.leftToPay}
            duration={loan.duration}
            interestRate={loan.interestRate}
            installment={loan.installment}
            isTotal={false}
          />
        ))}
        <LoanTableRow
          srNo="Total"
          loanMoney={`$${totalLoanMoney}`}
          leftToPay={`$${totalLeftToPay}`}
          duration=""
          interestRate=""
          installment={`$${totalInstallment.toFixed(2)}/month`}
          isTotal={true}
        />
      </div>
    </div>
  );
};

export default Loans;
