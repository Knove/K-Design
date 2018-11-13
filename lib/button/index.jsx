import React from "react";
import { styleMain, styleMouseOver } from "./style/button.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleSum: Object.assign({}, styleMain, this.props.style),
      styleBasic: Object.assign({}, styleMain, this.props.style)
    };
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  componentWillMount() {}

  onMouseOut() {
    this.setState({
      styleSum: this.state.styleBasic
    });
  }

  onMouseOver() {
    this.setState({
      styleSum: Object.assign({}, styleMain, styleMouseOver)
    });
  }

  render() {
    const config = {
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut
    };

    Object.assign(config, this.props);

    config.style = this.state.styleSum;

    console.log(config);
    return <div {...config}>{this.props.children}</div>;
  }
}

module.exports = Button;
