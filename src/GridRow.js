import React from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

class GridRow extends React.Component {
  static propTypes = {
    reverse: React.PropTypes.bool,
    xsAlign: React.PropTypes.string,
    smAlign: React.PropTypes.string,
    mdAlign: React.PropTypes.string,
    lgAlign: React.PropTypes.string,
    xsVAlign: React.PropTypes.string,
    smVAlign: React.PropTypes.string,
    mdVAlign: React.PropTypes.string,
    lgVAlign: React.PropTypes.string,
  };

  static defaultProps = {
    reverse: false,
    xsAlign: null,
    smAlign: null,
    mdAlign: null,
    lgAlign: null,
    xsVAlign: null,
    smVAlign: null,
    mdVAlign: null,
    lgVAlign: null,
  };

  render() {
    let reverseClass = "";
    let xsAlignClass = "";
    let smAlignClass = "";
    let mdAlignClass = "";
    let lgAlignClass = "";
    let xsVAlignClass = "";
    let smVAlignClass = "";
    let mdVAlignClass = "";
    let lgVAlignClass = "";

    if (this.props.reverse) {
      reverseClass = flexboxgrid.reverse;
    }

    if (this.props.xsAlign) {
      xsAlignClass = flexboxgrid[`${this.props.xsAlign}-xs`];
    }
    if (this.props.smAlign) {
      smAlignClass = flexboxgrid[`${this.props.smAlign}-sm`];
    }
    if (this.props.mdAlign) {
      mdAlignClass = flexboxgrid[`${this.props.mdAlign}-md`];
    }
    if (this.props.lgAlign) {
      lgAlignClass = flexboxgrid[`${this.props.lgAlign}-lg`];
    }

    if (this.props.xsVAlign) {
      xsVAlignClass = flexboxgrid[`${this.props.xsVAlign}-xs`];
    }
    if (this.props.smVAlign) {
      smVAlignClass = flexboxgrid[`${this.props.smVAlign}-sm`];
    }
    if (this.props.mdVAlign) {
      mdVAlignClass = flexboxgrid[`${this.props.mdVAlign}-md`];
    }
    if (this.props.lgVAlign) {
      lgVAlignClass = flexboxgrid[`${this.props.lgVAlign}-lg`];
    }

    return (
      <div className={classnames(
        this.props.className,
        flexboxgrid.row,
        reverseClass,
        xsAlignClass,
        smAlignClass,
        mdAlignClass,
        lgAlignClass,
        xsVAlignClass,
        smVAlignClass,
        mdVAlignClass,
        lgVAlignClass)}>
        {this.props.children}
      </div>
    );
  }
}

export default GridRow;
