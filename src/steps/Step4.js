import React, { Component } from 'react';
import classNames from 'classnames';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';
import ProductImage from '../layout/ProductImage';
import Textarea from '../form/Textarea';
import PrevNext from '../form/PrevNext';
import { CopyToClipboard } from 'react-copy-to-clipboard';


// let getCopyBtnClass = (hasCopiedReview) => 'btn';

@inject('store')
@observer
class Step4 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(3);
  }
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  

  render() {

    console.log(this.state);

    const { fields, onChange, onFocus, onBlur, hasCopiedReview, toggleCopiedReview } = this.props.store;

    let getCopyBtnClass = () => classNames(
      'btn btn-primary bg-blue fz2 nocaps py1/2 rounded absolute right-0 bottom-0 mr1/2 mb1/2', 
      {
        'bg-blue': this.state.copied,
        'bg-gray-darken-4': !this.state.copied
      }
    );

    return (
      <ColumnWrapper>

        <ProductImage />

        <Column className="bg-white my5 md-down-p2-1/2 md-p3">
        
          <p className="md-down-fz5 md-fz6 bold mt0 mb2-1/2 lh1">
            Please take a moment to share your experience with others.
          </p>

          <p className="fz3 lh2-1/2 bold mt0 mb1/2 gray-darken-3 caps">
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
          
            <CopyToClipboard text={fields.review.value} onCopy={toggleCopiedReview}>
              <button className={getCopyBtnClass()} >
                  copy
              </button>
            </CopyToClipboard>
          </div>

          <p className="fz3 lh2-1/2 bold mt0 mb1/2 gray-darken-3 caps">
            <span className="inline-block pr3/4">Step 2</span>
            <span className="text-color regular nocaps">Paste on Amazon</span>
          </p>
          <div className="border border-white-darken-4 bg-white rounded mb2-1/2 relative">
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/amazon-logo.svg" alt="Amazon" className="block fit mx-auto"/>
            </a>
            <a href="https://www.amazon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-orange fz2 nocaps py1/2 rounded absolute right-0 bottom-0 mr1/2 mb1/2">
                click here
            </a>
          </div>

          <p className="fz3 mt0 mb2-1/2 lh3">
            Click NEXT to receive your free coupon code
          </p>

          <PrevNext />

        </Column>

      </ColumnWrapper>
    )
  }
}

export default Step4;