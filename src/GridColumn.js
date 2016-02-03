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
    tagName: PropTypes.string,
  };

  static defaultProps = {
    tagName: "div",
  };

  render() {
    const {
      xs, sm, md, lg,
      xsOffset, smOffset, mdOffset, lgOffset,
      styles, tagName, className, children,
    } = this.props;

    if (styles) {
      if (console && console.warn) {
        console.warn("The `styles` prop is deprecated and will be removed in the future. Use the standard `style` prop instead.");
      }
    }

    const classes = classnames({
      [flexboxgrid["col-xs"]]: xs && xs === "auto",
      [flexboxgrid["col-sm"]]: sm && sm === "auto",
      [flexboxgrid["col-md"]]: md && md === "auto",
      [flexboxgrid["col-lg"]]: lg && lg === "auto",

      [flexboxgrid[`col-xs-${xs}`]]: xs && xs !== "auto",
      [flexboxgrid[`col-sm-${sm}`]]: sm && sm !== "auto",
      [flexboxgrid[`col-md-${md}`]]: md && md !== "auto",
      [flexboxgrid[`col-lg-${lg}`]]: lg && lg !== "auto",

      [flexboxgrid[`col-xs-offset-${xsOffset}`]]: xsOffset,
      [flexboxgrid[`col-sm-offset-${smOffset}`]]: smOffset,
      [flexboxgrid[`col-md-offset-${mdOffset}`]]: mdOffset,
      [flexboxgrid[`col-lg-offset-${lgOffset}`]]: lgOffset,

      [className]: true,
    });

    // The name of the variable has to start with an uppercase otherwise JSX
    // would literally create `<element>`.
    const Element = tagName;

    return (
      <Element {...this.props}
               className={classes}
               style={this.props.style || styles}>
        {children}
      </Element>
    );
  }
}


export default GridColumn;
