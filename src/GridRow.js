import React, { PropTypes } from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

class GridRow extends React.Component {
  static propTypes = {
    reverse: PropTypes.bool,
    xsAlign: PropTypes.string,
    smAlign: PropTypes.string,
    mdAlign: PropTypes.string,
    lgAlign: PropTypes.string,
    xsVAlign: PropTypes.string,
    smVAlign: PropTypes.string,
    mdVAlign: PropTypes.string,
    lgVAlign: PropTypes.string,
    styles: PropTypes.object, // TODO: remove this
    tagName: PropTypes.string,
  };

  static defaultProps = {
    tagName: "div",
  };

  render() {
    const {
      reverse,
      xsAlign, smAlign, mdAlign, lgAlign,
      xsVAlign, smVAlign, mdVAlign, lgVAlign,
      styles, tagName, className, children,
    } = this.props;

    if (styles) {
      if (console && console.warn) {
        console.warn("The `styles` prop is deprecated and will be removed in the future. Use the standard `style` prop instead.");
      }
    }

    const classes = classnames({
      [flexboxgrid.row]: true,
      [flexboxgrid.reverse]: reverse,

      [flexboxgrid[`${xsAlign}-xs`]]: xsAlign,
      [flexboxgrid[`${smAlign}-sm`]]: smAlign,
      [flexboxgrid[`${mdAlign}-md`]]: mdAlign,
      [flexboxgrid[`${lgAlign}-lg`]]: lgAlign,

      [flexboxgrid[`${xsVAlign}-xs`]]: xsVAlign,
      [flexboxgrid[`${smVAlign}-sm`]]: smVAlign,
      [flexboxgrid[`${mdVAlign}-md`]]: mdVAlign,
      [flexboxgrid[`${lgVAlign}-lg`]]: lgVAlign,
    }, className);

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

export default GridRow;
