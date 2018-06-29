import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";


function getPrevButton (stepObj) {
  return (stepObj.previous) 
    ? <Link to={stepObj.previous} className="btn btn-outline blue px2-1/2 mr2">Previous</Link>
    : ''
}

function getNextButton (stepObj, stepCompleted, makeFieldsDirty) {
  return (stepCompleted && stepObj.next) 
    ? <Link to={stepObj.next} className="btn btn-primary bg-blue px2-1/2">Next</Link>
    : <div className="btn btn-outline blue px2-1/2" onClick={(e) => { makeFieldsDirty() }}>Next</div>
}


@inject('store')
@observer
class PrevNext extends Component {

  render() {

    const { stepObj, stepCompleted, makeFieldsDirty } = this.props.store;
    console.log(stepObj, stepCompleted);

    return (
      <div>
        {getPrevButton(stepObj)}
        {getNextButton(stepObj, stepCompleted, makeFieldsDirty)}
      </div>
    );

  }
}

export default PrevNext;