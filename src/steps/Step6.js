import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Column, ColumnWrapper } from '../layout/ColumnWrapper';


@inject('store')
@observer
class Step6 extends Component {

  componentDidMount() {
    this.props.store.setCurrentStepIndex(5);
  }

  render() {

    return (
      <ColumnWrapper>

        <Column className="bg-white my4 md-down-p2-1/2 md-p3">

          <p className="md-down-fz5 md-fz6 bold mt0 mb1 lh1">
            Thanks for sharing your experience!
          </p>
          <p className="fz3 mt0 mb2 lh3">
            By the way, if you’re a regular Amazon shopper, here’s the direct link to our Amazon store:
          </p>
          <p className="fz3 mt0 mb0 lh3">
            <a href="https://www.amazon.com/onnit">www.amazon.com/onnit</a>
          </p>

        </Column>

      </ColumnWrapper>
    )
  }
}

export default Step6;