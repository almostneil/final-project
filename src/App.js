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
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';


@inject('store')
@observer
class App extends Component {

  render() {
    return (
      <div className="App  max-width-6 mx-auto">
        <Header />
        <ProgressBar progressPercent={this.props.store.progressPercent} />
        <BrowserRouter>
          <Switch>
            <Route path="/step-1" component={Step1} />
            <Route path="/step-2" component={Step2} />
            <Route path="/step-3" component={Step3} />
            <Route path="/step-4" component={Step4} />
            <Route path="/step-5" component={Step5} />
            <Route path="/step-6" component={Step6} />
            <Route component={Step1} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
