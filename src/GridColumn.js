import React, { PropTypes } from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

class GridColumn extends React.Component {
  static propTypes = {
    xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    md: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    xsOffset: PropTypes.number,
    smOffset: PropTypes.number,
    mdOffset: PropTypes.number,
    lgOffset: PropTypes.number,
    styles: PropTypes.object,
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

    let styles = this.props.styles;

    if (this.props.xs) {
      if (this.props.xs === "auto") {
        extraSmallClass = flexboxgrid[`col-xs`];
      } else {
        extraSmallClass = flexboxgrid[`col-xs-${this.props.xs}`];
      }
    }
    if (this.props.sm) {
      if (this.props.sm === "auto") {
        smallClass = flexboxgrid[`col-sm`];
      } else {
        smallClass = flexboxgrid[`col-sm-${this.props.sm}`];
      }
    }
    if (this.props.md) {
      if (this.props.md === "auto") {
        mediumClass = flexboxgrid[`col-md`];
      } else {
        mediumClass = flexboxgrid[`col-md-${this.props.md}`];
      }
    }
    if (this.props.lg) {
      if (this.props.lg === "auto") {
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
        this.props.className,
        extraSmallClass,
        extraSmallOffsetClass,
        smallClass,
        smallOffsetClass,
        mediumClass,
        mediumOffsetClass,
        largeClass,
        largeOffsetClass)}
        style={styles}>>
        {this.props.children}
      </div>
    );
  }
}


export default GridColumn;
