import React from "react";
import classnames from "classnames";
import flexboxGrid from "flexboxgrid/dist/flexboxgrid.css";

class GridRow extends React.Component {
  render() {
    let reverseClass = "";

    if (this.props.reverse) {
      reverseClass = flexboxGrid.reverse;
    }

    return(
      <div className={classnames(flexboxGrid.row, reverseClass)}>
        {this.props.children}
      </div>
    );
  }
}

GridRow.propTypes = {
  reverse: React.PropTypes.bool
};

GridRow.defaultProps = {
  reverse: false
};

export default GridRow;
