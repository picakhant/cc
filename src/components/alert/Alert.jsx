import React from "react";

const Alert = ({text, icon, type, isSoft}) => {
  return (
    <div role="alert" className={`alert ${type && type} ${isSoft && "alert-soft"}`}>
      {icon && icon}
      <span>{text}</span>
    </div>
  );
};

export default Alert;
