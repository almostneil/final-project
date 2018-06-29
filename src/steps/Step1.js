import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import Input from '../form/Input';
import MaskedInput from '../form/MaskedInput';
import PrevNext from '../form/PrevNext';

@inject('store')
@observer
class Step1 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(0);
  }

  render() {

    const { fields, onChange, onFocus, onBlur } = this.props.store;
    const style= {
      backgroundImage: 'url(/assets/welcome-screen.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    };

    return (
      <ColumnWrapper style={style}>

        <Column className="bg-white my5 md-down-p2-1/2 md-p3">
        
          <p className="md-down-fz5 md-fz6 bold mt0 mb2 lh1">
            Claim your free gift
          </p>

          <Input
            label="Email"
            name="email"
            type="email"
            value={fields.email.value}
            isValid={fields.email.isValid}
            isDirty={fields.email.isDirty}
            isPristine={fields.email.isPristine}
            errorMessage={fields.email.errorMessage}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
          
          <MaskedInput
            label="Amazon Order Number"
            name="orderNumber"
            options={{blocks: [3,7,7], delimiter: '-', numericOnly: true}}
            placeholder="000-0000000-0000000"
            value={fields.orderNumber.value}
            isValid={fields.orderNumber.isValid}
            isDirty={fields.orderNumber.isDirty}
            isPristine={fields.orderNumber.isPristine}
            errorMessage={fields.orderNumber.errorMessage}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          <PrevNext />

        </Column>

      </ColumnWrapper>
    );
  }
}

export default Step1;
