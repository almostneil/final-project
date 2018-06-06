import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import { inject, observer } from 'mobx-react';
import Header from './layout/Header';
import ProgressBar from './layout/ProgressBar';


import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';


@inject('store')
@observer
class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props.store);

    let { progress } = this.props.store;

    return (
      <div className="App  max-width-6 mx-auto">
        <Header />
        <ProgressBar progress={progress} />
        <BrowserRouter>
          <Switch>
            <Route path="/step-1" component={Step1} />
            <Route path="/step-2" component={Step2} />
            <Route path="/step-3" component={Step3} />
            <Route path="/step-4" component={Step4} />
            <Route component={Step1} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
