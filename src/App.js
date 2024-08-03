import React, { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Loans from "./Components/Loans/Loans";
import Header from "./Components/Header/Header";
import "./App.scss";
import "./Components/LoanTag/LoanTag.css";
import "./Components/Loans/Loans.css";
import { CONSTANT } from "./constant";

function App() {
  const [activeOption, setActiveOption] = useState("Loans");

  const getContent = () => {
    switch (activeOption) {
      case "Dashboard":
        return CONSTANT.DASHBOARD_CONTENT;
      case "Transactions":
        return CONSTANT.TRANSACTIONS_CONTENT;
      case "Accounts":
        return CONSTANT.ACCOUNTS_CONTENT;
      case "Investment":
        return CONSTANT.INVESTMENT_CONTENT;
      case "Credit":
        return CONSTANT.CREDIT_CONTENT;
      case "Loans":
        return <Loans />;
      case "Service":
        return CONSTANT.SERVICE_CONTENT;
      case "Privileges":
        return CONSTANT.PRIVILIGES_CONTENT;
      case "Setting":
        return CONSTANT.SETTING_CONTENT;
      default:
        return <Loans />;
    }
  };

  return (
    <div className="app">
      <Header activeOption={activeOption} />
      <div className="container">
        <div className="dashboard-wrap">
          <Sidebar
            activeOption={activeOption}
            setActiveOption={setActiveOption}
          />
          <div className="mainContent">
            <div>{getContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
