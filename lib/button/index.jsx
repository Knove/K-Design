import React from "react";
import { styleMain, onHandler, kType } from "./style/button.js";

class Button extends React.Component {
  constructor(props) {
    super(props);
    const styleBasic = Object.assign(
      {},
      styleMain,
      props.style,
      kType[props.ktype]
    );

    this.state = {
      styleSum: styleBasic,
      styleBasic,
      kType: props.ktype ? props.ktype : "default",
      fixed: false
    };
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {}

  onMouseOut() {
    if (!this.state.fixed)
      this.setState({
        styleSum: this.state.styleBasic
      });
  }

  onMouseOver() {
    if (!this.state.fixed)
      this.setState({
        styleSum: Object.assign(
          {},
          this.state.styleSum,
          onHandler[this.state.kType].styleMouseOver
        )
      });
  }

  onFocus() {
    this.setState({
      styleSum: Object.assign(
        {},
        this.state.styleSum,
        onHandler[this.state.kType].onFocus
      ),
      fixed: true
    });
  }

  onBlur() {
    this.setState({
      styleSum: this.state.styleBasic,
      fixed: false
    });
  }

  render() {
    const config = {
      tabIndex: "0",
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut,
      onFocus: this.onFocus,
      onBlur: this.onBlur
    };

    Object.assign(config, this.props);

    config.style = this.state.styleSum;

    console.log(config);
    return <div {...config}>{this.props.children}</div>;
  }
}

module.exports = Button;
