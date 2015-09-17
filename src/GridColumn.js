import React from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

class GridColumn extends React.Component {
  static propTypes = {
    xs: React.PropTypes.number,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
  };

  render() {
    let extraSmallClass = "";
    let smallClass = "";
    let mediumClass = "";
    let largeClass = "";
    let extraSmallOffsetClass = "";
    let smallOffsetClass = "";
    let mediumOffsetClass = "";
    let largeOffsetClass = "";

    if (this.props.xs) {
      if (this.props.xs === 0) {
        extraSmallClass = flexboxgrid[`col-xs`];
      } else {
        extraSmallClass = flexboxgrid[`col-xs-${this.props.xs}`];
      }
    }
    if (this.props.sm) {
      if (this.props.sm === 0) {
        smallClass = flexboxgrid[`col-sm`];
      } else {
        smallClass = flexboxgrid[`col-sm-${this.props.xs}`];
      }
    }
    if (this.props.md) {
      if (this.props.md === 0) {
        mediumClass = flexboxgrid[`col-md`];
      } else {
        mediumClass = flexboxgrid[`col-md-${this.props.md}`];
      }
    }
    if (this.props.lg) {
      if (this.props.lg === 0) {
        largeClass = flexboxgrid[`col-lg`];
      } else {
        largeClass = flexboxgrid[`col-lg-${this.props.lg}`];
      }
    }

    if (this.props.xsOffset) {
      extraSmallOffsetClass = flexboxgrid[`col-xs-offset-${this.props.xsOffset}`];
    }
    if (this.props.smOffset) {
      smallOffsetClass = flexboxgrid[`col-sm-offset-${this.props.smOffset}`];
    }
    if (this.props.mdOffset) {
      mediumOffsetClass = flexboxgrid[`col-md-offset-${this.props.mdOffset}`];
    }
    if (this.props.lgOffset) {
      largeOffsetClass = flexboxgrid[`col-lg-offset-${this.props.lgOffset}`];
    }

    return (
      <div className={classnames(
        extraSmallClass,
        extraSmallOffsetClass,
        smallClass,
        smallOffsetClass,
        mediumClass,
        mediumOffsetClass,
        largeClass,
        largeOffsetClass)}>
        {this.props.children}
      </div>
    );
  }
}


export default GridColumn;
