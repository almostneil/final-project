import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import { Column } from './ColumnWrapper';

@inject('store')
@observer
class SupplementImage extends Component {

  render() {
    const { supplementImage } = this.props.store;

    return (
      <Column className="md-down-p2-1/2 md-p3">
        <img src={supplementImage} alt="" className="block col-8 mx-auto" />
      </Column>
    );
  }
}

export default SupplementImage;