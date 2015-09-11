import React from "react";
import classnames from "classnames";
import flexboxGrid from "flexboxgrid/dist/flexboxgrid.css";

class GridColumn extends React.Component {
  // #TODO: Implement the rest of flexbox column alternatives
  // an example would be offsets, aligning etc etc
  render() {
    let extraSmallClass = "";
    let smallClass = "";
    let mediumClass = "";
    let largeClass = "";

    if (this.props.xs) {
      extraSmallClass = flexboxGrid[`col-xs-${this.props.xs}`];
    }
    if (this.props.sm) {
      smallClass = flexboxGrid[`col-sm-${this.props.xs}`];
    }
    if (this.props.md) {
      mediumClass = flexboxGrid[`col-md-${this.props.md}`];
    }
    if (this.props.lg) {
      largeClass = flexboxGrid[`col-lg-${this.props.lg}`];
    }

    return(
      <div className={classnames(extraSmallClass, smallClass, mediumClass, largeClass)}>
        {this.props.children}
      </div>
    );
  }
};

GridColumn.propTypes = {
  xs: React.PropTypes.number.isRequired,
  sm: React.PropTypes.number,
  md: React.PropTypes.number,
  lg: React.PropTypes.number
};

export default GridColumn;
