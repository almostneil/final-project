import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Column } from './ColumnWrapper';

@inject('store')
@observer
class ProductImage extends Component {

  render() {
    const { productImage } = this.props.store;

    return (
      <Column className="md-down-p2-1/2 md-p3">
        <img src={productImage} alt="" className="block col-6 mx-auto" />
      </Column>
    );
  }
}

export default ProductImage;