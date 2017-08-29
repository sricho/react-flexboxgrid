import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = "div";

const Grid = ({
  fluid,
  className,
  nodeName,
  children,
  ...other
}) => {
  const Element = nodeName || DEFAULT_NODE;
  const classes = classnames({
    [flexboxgrid["container"]]: !fluid,
    [flexboxgrid["container-fluid"]]: fluid,
  }, className);

  return (
    <Element className={ classes } { ...other }>
      { children }
    </Element>
  );
}

Grid.propTypes = {
  fluid: PropTypes.bool,
  nodeName: PropTypes.string,
};

Grid.defaultProps = {
  nodeName: DEFAULT_NODE,
};

export default Grid