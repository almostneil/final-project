import React from "react";

function ProgressBar(props) {

  const progressStyle = {
    width: props.progress + '%',
    transition: 'width .5s ease'
  }

  const numberMarkup = (props.progress > 10)
    ? <span><span>{props.progress}%</span><span className="md-down-hide"> Complete</span></span>
    : '';

  const numberStyle = {
    lineHeight: '24px',
    transition: 'opacity .5s ease'
  };
  numberStyle['opacity'] = (props.progress > 10)
    ? '1'
    : '0';

  return (
    <div className="pt2-1/2 bg-darken-1-1/2 relative">
      <div style={progressStyle} className="bg-blue pt2-1/2 absolute left-0 top-0">
        <div className="absolute pos-0-all white caps bold center fz1 nowrap" style={numberStyle}>
          {numberMarkup}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;