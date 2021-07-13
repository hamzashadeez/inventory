import React from "react";
import "./dashcard.css";

function DashCard({ label, number, icon }) {
  return (
    <div className="dashcard shadow-sm rounded d-flex align-items-center">
      <div className="icon_container mr-3">
        <i class={'fa '+ icon} aria-hidden="true"></i>
      </div>
      <div>
        <h6>{label}</h6>
        <h4>{number}</h4>
      </div>
    </div>
  );
}

export default DashCard;
