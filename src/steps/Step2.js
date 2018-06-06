import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import ProductImage from '../layout/ProductImage';
import Select from '../form/Select';
import RadioGroup from '../form/RadioGroup';
import PrevNext from '../form/PrevNext';

@inject('store')
@observer
class Step2 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(1);
  }

  render() {
    const { fields, onChange, onFocus, onBlur, supplements } = this.props.store;

    return (
      <ColumnWrapper>

        <ProductImage />

        <Column className="bg-white my5 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb2 lh1">
            Hi {fields.name.value}, tell us a little bit more about your experience.
          </p>

          <Select
            label="Which product did you try?"
            name="product"
            value={fields.product.value}
            options={supplements}
            isValid={fields.product.isValid}
            isDirty={fields.product.isDirty}
            isPristine={fields.product.isPristine}
            errorMessage={fields.product.errorMessage}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          <RadioGroup
            label="How long have you been taking it?"
            name="howLongTaking"
            value={fields.howLongTaking.value}
            options={[
              { label: "Less than 15 days", value: "0-14" },
              { label: "Between 15 and 30 days", value: "15-30" },
              { label: "More than 30 days", value: "31-999" }
            ]}
            isValid={fields.howLongTaking.isValid}
            isDirty={fields.howLongTaking.isDirty}
            isPristine={fields.howLongTaking.isPristine}
            errorMessage={fields.howLongTaking.errorMessage}
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
