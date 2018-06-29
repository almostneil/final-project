import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import SupplementImage from '../layout/SupplementImage';
import Textarea from '../form/Textarea';
import StarRating from '../form/StarRating';
import PrevNext from '../form/PrevNext';

@inject('store')
@observer
class Step3 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(3);
  }

  render() {
    const { fields, onChange, onFocus, onBlur, onStarClick } = this.props.store;

    return (
      <ColumnWrapper>

        <SupplementImage />

        <Column className="bg-white my2-1/2 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb1 lh1">
            Review
          </p>
          <p className="fz3 mt0 mb2-1/2 lh3">
            We’d love it if you took a second to share your experience with our products.  Would you be willing to leave a quick review?
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
