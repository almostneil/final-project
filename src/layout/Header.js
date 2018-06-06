import React from "react";

function Header(props){
  return (
    <div className="bg-white border-bottom border-white-darken-3">
      <div className="max-width-5 mx-auto px2-1/2 py1 flex items-center">
        <img className="nudge-down-2" src="https://scdn.onnit.com/images/interface/onnit-logo.svg" alt="Onnit" />
      </div>
    </div>
  )
}

export default Header;