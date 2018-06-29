import React, { Component } from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import SupplementImage from '../layout/SupplementImage';
import Textarea from '../form/Textarea';
import PrevNext from '../form/PrevNext';
import { CopyToClipboard } from 'react-copy-to-clipboard';


@inject('store')
@observer
class Step5 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(4);
  }

  render() {

    const { fields, onChange, onFocus, onBlur, toggleUiState, supplementReviewLink } = this.props.store;

    let getCopyBtnClass = () => classNames(
      'btn btn-primary fz2 nocaps py1/2 rounded absolute right-0 bottom-0 mr1/2 mb1/2', 
      {
        'bg-orange': fields.hasCopiedReview.value,
        'bg-black-lighten-4': !fields.hasCopiedReview.value
      }
    );

    let getAmazonBtnClass = () => classNames(
      'btn btn-primary fz2 nocaps py1/2 rounded absolute right-0 bottom-0 mr1/2 mb1/2', 
      {
        'bg-orange': fields.hasClickedAmazon.value,
        'bg-black-lighten-4': !fields.hasClickedAmazon.value
      }
    );

    let getCopyBtnLabel = () => fields.hasCopiedReview.value
      ? '✓ copied'
      : 'copy';

    let getAmazonBtnLabel = () => fields.hasClickedAmazon.value
      ? '✓ click here'
      : 'click here';

    return (
      <ColumnWrapper>

        <SupplementImage />

        <Column className="bg-white my2-1/2 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb1 lh1">
            Review
          </p>
          <p className="fz3 mt0 mb2-1/2 lh3">
            Thanks for providing your review! Don't forget to post it on Amazon if you have a moment.
          </p>

          <p className="fz2 lh2-1/2 bold mt0 mb1/2 gray-darken-3 caps">
            <span className="inline-block pr3/4">Step 1</span>
            <span className="text-color regular nocaps">Copy text below</span>
          </p>


          <div className="relative mb2-1/2">
            <Textarea
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
          
            <CopyToClipboard text={fields.review.value} onCopy={ () => toggleUiState('hasCopiedReview', true) }>
              <button className={getCopyBtnClass()} >
                  {getCopyBtnLabel()}
              </button>
            </CopyToClipboard>
          </div>

          <p className="fz2 lh2-1/2 bold mt0 mb1/2 gray-darken-3 caps">
            <span className="inline-block pr3/4">Step 2</span>
            <span className="text-color regular nocaps">Paste on Amazon</span>
          </p>
          <div className="border border-white-darken-4 bg-white rounded mb2-1/2 relative">

            <a 
              href={supplementReviewLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={ () => toggleUiState('hasClickedAmazon', true) }
            >
              <img src="/assets/amazon-logo.svg" alt="Amazon" className="block fit mx-auto"/>
            </a>

            <a
              href={supplementReviewLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={getAmazonBtnClass()} 
              onClick={ () => toggleUiState('hasClickedAmazon', true) }
            >
                {getAmazonBtnLabel()}
            </a>

          </div>

          <PrevNext />

        </Column>

      </ColumnWrapper>
    )
  }
}

export default Step5;