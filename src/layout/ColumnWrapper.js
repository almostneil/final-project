import React from "react";

function Column({children, className}) {
  return (
    <div className={`md-col-6 ${className}`}>
      {children}
    </div>
  )
}

function ColumnWrapper({children, style}) {
  return (
    <div className="wizard-body  bg-white-darken-1 py-micro" style={style}>
      <div className="px2-1/2">
        <div className="max-width-3 mx-auto md-flex items-center justify-end">
          {children}
        </div>
      </div>
    </div>
  )
}

export { Column, ColumnWrapper };