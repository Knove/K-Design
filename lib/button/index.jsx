import React from 'react';
import { styleMain } from './style/button.js';

class Button extends React.Component {
  render() {
    const props = this.props;

    const styleSum =  Object.assign({}, styleMain, props.style);

    const config = {
    };


    Object.assign(config, props);
    config.style = styleSum;
    
    console.log(config);
    return <div {...config}>{props.children}</div>;
  }
}

module.exports = Button;
