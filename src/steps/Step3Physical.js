import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Input from '../form/Input';

@inject('store')
@observer
class Step3Physical extends Component {

  render() {
    const { fields, onChange, onFocus, onBlur } = this.props.store;

    return (
      <div>
        <p className="md-down-fz5 md-fz6 bold mt0 mb1 lh1">
          Shipping address
        </p>
        <p className="fz3 mt0 mb2 lh3">
          Where should we send your free gift?
        </p>
        <div className="flex mxn1/2">
          <div className="col-6 px1/2">
            <Input
              label="First Name"
              name="firstName"
              inputGroupClass="mb1"
              value={fields.firstName.value}
              isValid={fields.firstName.isValid}
              isDirty={fields.firstName.isDirty}
              isPristine={fields.firstName.isPristine}
              errorMessage={fields.firstName.errorMessage}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          <div className="col-6 px1/2">
            <Input
              label="Last Name"
              name="lastName"
              inputGroupClass="mb1"
              value={fields.lastName.value}
              isValid={fields.lastName.isValid}
              isDirty={fields.lastName.isDirty}
              isPristine={fields.lastName.isPristine}
              errorMessage={fields.lastName.errorMessage}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>
        <Input
          label="Street address"
          name="address1"
          inputGroupClass="mb1"
          value={fields.address1.value}
          isValid={fields.address1.isValid}
          isDirty={fields.address1.isDirty}
          isPristine={fields.address1.isPristine}
          errorMessage={fields.address1.errorMessage}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Input
          label="Apt, Suite, Bldg. (optional)"
          name="address2"
          inputGroupClass="mb1"
          value={fields.address2.value}
          isRequired={fields.address2.isRequired}
          isValid={fields.address2.isValid}
          isDirty={fields.address2.isDirty}
          isPristine={fields.address2.isPristine}
          errorMessage={fields.address2.errorMessage}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className="flex mxn1/2">
          <div className="col-6 px1/2">
            <Input
              label="City"
              name="city"
              value={fields.city.value}
              isValid={fields.city.isValid}
              isDirty={fields.city.isDirty}
              isPristine={fields.city.isPristine}
              errorMessage={fields.city.errorMessage}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          <div className="col-2-1/2 px1/2">
            <Input
              label="State"
              name="state"
              value={fields.state.value}
              isValid={fields.state.isValid}
              isDirty={fields.state.isDirty}
              isPristine={fields.state.isPristine}
              errorMessage={fields.state.errorMessage}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
          <div className="col-3-1/2 px1/2">
            <Input
              label="Zip"
              name="zip"
              value={fields.zip.value}
              isValid={fields.zip.isValid}
              isDirty={fields.zip.isDirty}
              isPristine={fields.zip.isPristine}
              errorMessage={fields.zip.errorMessage}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Step3Physical;
