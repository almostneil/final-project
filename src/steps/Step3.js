import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import GiftImage from '../layout/GiftImage';
import PrevNext from '../form/PrevNext';
import Step3Physical from './Step3Physical';
import Step3Digital from './Step3Digital';

@inject('store')
@observer
class Step3 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(2);
  }

  render() {
    const { giftType } = this.props.store;

    let getStep3Form = giftType => {
      return (giftType === 'digital')
        ? <Step3Digital />
        : <Step3Physical />;
    }

    return (
      <ColumnWrapper>
        <GiftImage />
        <Column className="bg-white my2-1/2 md-down-p2-1/2 md-p3">
          {getStep3Form(giftType)}
          <PrevNext />
        </Column>
      </ColumnWrapper>
    );

  }
}

export default Step3;
