import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import GiftImage from '../layout/GiftImage';
import Select from '../form/Select';
import PrevNext from '../form/PrevNext';

@inject('store')
@observer
class Step2 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(1);
  }

  render() {
    const { fields, onChange, onFocus, onBlur, giftOptions } = this.props.store;

    return (
      <ColumnWrapper>

        <GiftImage />

        <Column className="bg-white my5 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb2 lh1">
            Select your free gift
          </p>

          <Select
            label="Choose gift"
            name="gift"
            value={fields.gift.value}
            options={giftOptions}
            isValid={fields.gift.isValid}
            isDirty={fields.gift.isDirty}
            isPristine={fields.gift.isPristine}
            errorMessage={fields.gift.errorMessage}
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

export default Step2;
