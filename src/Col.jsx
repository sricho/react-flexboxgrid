import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = "div";
const ModificatorType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);
const ReorderType = PropTypes.oneOf(["first", "last"]);

const Col = ({
  xs, xsOffset, xsReorder,
  sm, smOffset, smReorder,
  md, mdOffset, mdReorder,
  lg, lgOffset, lgReorder,
  reverse,
  className,
  nodeName,
  children,
  ...other
}) => {
  const Element = nodeName || DEFAULT_NODE;
  const classes = classnames({
    [flexboxgrid[`${Number.isInteger(xs) ? `col-xs-${xs}` : ""}`]]: xs,
    [flexboxgrid[`${Number.isInteger(sm) ? `col-sm-${sm}` : ""}`]]: sm,
    [flexboxgrid[`${Number.isInteger(md) ? `col-md-${md}` : ""}`]]: md,
    [flexboxgrid[`${Number.isInteger(lg) ? `col-lg-${lg}` : ""}`]]: lg,
    [flexboxgrid[`col-xs-offset-${xsOffset}`]]: xsOffset,
    [flexboxgrid[`col-sm-offset-${smOffset}`]]: smOffset,
    [flexboxgrid[`col-md-offset-${mdOffset}`]]: mdOffset,
    [flexboxgrid[`col-lg-offset-${lgOffset}`]]: lgOffset,
    [flexboxgrid[`${xsReorder}-xs`]]: xsReorder,
    [flexboxgrid[`${smReorder}-xs`]]: smReorder,
    [flexboxgrid[`${mdReorder}-xs`]]: mdReorder,
    [flexboxgrid[`${lgReorder}-xs`]]: lgReorder,
    [flexboxgrid["col-reverse"]]: reverse,
  }, className);

  return (
    <Element className={ classes } { ...other }>
      { children }
    </Element>
  );
}

Col.propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xsReorder: ReorderType,
  smReorder: ReorderType,
  mdReorder: ReorderType,
  lgReorder: ReorderType,
  reverse: PropTypes.bool,
  nodeName: PropTypes.string,
};

Col.defaultProps = {
  nodeName: DEFAULT_NODE,
};

export default Col