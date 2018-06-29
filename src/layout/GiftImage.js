import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Column } from './ColumnWrapper';

@inject('store')
@observer
class GiftImage extends Component {

  render() {
    const { giftImage } = this.props.store;

    return (
      <Column className="md-down-p2-1/2 md-p3">
        <img src={giftImage} alt="" className="block col-8 mx-auto" />
      </Column>
    );
  }
}

export default GiftImage;