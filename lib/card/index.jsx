import React from "react";
import {
  styleMain,
  styleTitle,
  styleBody,
  onHandler,
  styleExtra,
  kType
} from "./style/card.js";

class Card extends React.Component {
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

  render() {
    const config = {
      onMouseOver: this.onMouseOver,
      onMouseOut: this.onMouseOut
    };

    Object.assign(config, this.props);

    config.style = this.state.styleSum;
    console.log(config);
    return (
      <div {...config}>
        {this.props.title ? (
          <div style={styleTitle} title="">
            {this.props.title}
            {this.props.extra ? (
              <div style={styleExtra} title="">
                {this.props.extra}
              </div>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div style={styleBody} title="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = Card;
