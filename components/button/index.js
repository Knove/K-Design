'use strict';
import React from 'react';
import style from './style/button.js';

class Button extends React.Component {
  render() {
    const props = this.props;

    const styleSum =  Object.assign({}, style, props.style);

    const config = {
    };


    Object.assign(config, props);
    config.style = styleSum;
    
    console.log(config);
    return <div {...config}>{props.children}</div>;
  }
}

module.exports = Button;
