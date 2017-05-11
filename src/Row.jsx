import React, { Component } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = "div";
const HAlignType = PropTypes.oneOf(["start", "center", "end"]);
const VAlignType = PropTypes.oneOf(["top", "middle", "bottom"]);
const DistributionType = PropTypes.oneOf(["around", "between"]);


export default class Row extends Component {
  static propTypes = {
    reverse: PropTypes.bool,
    xsHAlign: HAlignType,
    smHAlign: HAlignType,
    mdHAlign: HAlignType,
    lgHAlign: HAlignType,
    xsVAlign: VAlignType,
    smVAlign: VAlignType,
    mdVAlign: VAlignType,
    lgVAlign: VAlignType,
    xsDistribution: DistributionType,
    smDistribution: DistributionType,
    mdDistribution: DistributionType,
    lgDistribution: DistributionType,
    nodeName: PropTypes.string,
  };

  static defaultProps = {
    nodeName: DEFAULT_NODE,
  };

  render() {
    const {
      xsHAlign, smHAlign, mdHAlign, lgHAlign,
      xsVAlign, smVAlign, mdVAlign, lgVAlign,
      xsDistribution, smDistribution, mdDistribution, lgDistribution,
      reverse,
      className,
      nodeName,
      children,
      ...other
    } = this.props;
    const Element = nodeName || DEFAULT_NODE;
    const classes = classnames({
      [flexboxgrid["row"]]: !reverse,
      [flexboxgrid["row-reverse"]]: reverse,
      [flexboxgrid[`${xsHAlign}-xs`]]: xsHAlign,
      [flexboxgrid[`${smHAlign}-sm`]]: smHAlign,
      [flexboxgrid[`${mdHAlign}-md`]]: mdHAlign,
      [flexboxgrid[`${lgHAlign}-lg`]]: lgHAlign,
      [flexboxgrid[`${xsVAlign}-xs`]]: xsVAlign,
      [flexboxgrid[`${smVAlign}-sm`]]: smVAlign,
      [flexboxgrid[`${mdVAlign}-md`]]: mdVAlign,
      [flexboxgrid[`${lgVAlign}-lg`]]: lgVAlign,
      [flexboxgrid[`${xsDistribution}-xs`]]: xsDistribution,
      [flexboxgrid[`${smDistribution}-sm`]]: smDistribution,
      [flexboxgrid[`${mdDistribution}-md`]]: mdDistribution,
      [flexboxgrid[`${lgDistribution}-lg`]]: lgDistribution,
    }, className);

    return (
      <Element className={ classes } { ...other }>
        { children }
      </Element>
    );
  }
}
