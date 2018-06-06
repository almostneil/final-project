import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import ProductImage from '../layout/ProductImage';
import Textarea from '../form/Textarea';
import StarRating from '../form/StarRating';
import PrevNext from '../form/PrevNext';

@inject('store')
@observer
class Step3 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(2);
  }

  render() {
    const { fields, onChange, onFocus, onBlur, onStarClick, supplementName } = this.props.store;

    if (!fields.howLongTaking.value || fields.howLongTaking.value === '0-14') {
      return (
        <ColumnWrapper>
          <ProductImage />
          <Column className="bg-white my5 md-down-p2-1/2 md-p3">
            <p className="md-down-fz5 md-fz6 bold mt0 mb1 lh1">
              Sorry!
            </p>
            <p className="fz3 mt0 mb2 lh3">
              We want to ensure that you have adequate time to evaluate our product … that is why we request you to use it for at least 15 days before providing your feedback.
            </p>
            <PrevNext />
          </Column>
        </ColumnWrapper>
      );
    }

    return (
      <ColumnWrapper>

        <ProductImage />

        <Column className="bg-white my5 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb1/2 lh1">
            Thanks for trying {supplementName}
          </p>
          <p className="fz3 mt0 mb2-1/2 lh3">
            Please rate it on a scale from 1 - 5 and write a brief review.
          </p>

          <StarRating
            label="Rating"
            name="rating"
            value={fields.rating.value}
            isValid={fields.rating.isValid}
            isDirty={fields.rating.isDirty}
            isPristine={fields.rating.isPristine}
            errorMessage={fields.rating.errorMessage}
            onStarClick={onStarClick}
          />

          <Textarea
            label="Review"
            name="review"
            hasFloatingLabel={false}
            value={fields.review.value}
            isValid={fields.review.isValid}
            isDirty={fields.review.isDirty}
            isPristine={fields.review.isPristine}
            errorMessage={fields.review.errorMessage}
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

export default Step3;
