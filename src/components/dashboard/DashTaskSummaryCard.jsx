import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

// Styled in dashboard.scss under .task-summary
function DashTaskSummaryCard({
  summaryName,
  qty,
  numChanged,
  changeState,
  className,
}) {
  return (
    <div className={className}>
      <h4>
        {summaryName}
        <span>
          <BsArrowUpRightCircle />
        </span>
      </h4>
      <h3>{qty}</h3>
      <p>
        <span>
          {changeState === 1 ? <RxCaretUp /> : <RxCaretDown />}
          {numChanged}
        </span>{" "}
        {changeState === 1 ? "increased" : "decreased"} from last month.
      </p>
    </div>
  );
}

export default DashTaskSummaryCard;
