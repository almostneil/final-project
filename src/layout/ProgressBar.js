import React from "react";

function ProgressBar(props) {

  const progressStyle = {
    width: props.progressPercent,
    transition: 'width .5s ease'
  };

  return (
    <div className="pt1-1/2 bg-darken-1-1/2 relative">
      <div style={progressStyle} className="bg-blue pt1-1/2 absolute left-0 top-0"></div>
    </div>
  )
}

export default ProgressBar;