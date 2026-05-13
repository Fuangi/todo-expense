import React from "react";
import DashLayout from "../layout/DashLayout";
import Loader from "../layout/Loader";

function Expense() {
  return (
    <DashLayout>
      <Loader />
    </DashLayout>
  );
}

export default Expense;
