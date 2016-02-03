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
    styles: PropTypes.object,
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

    const classes = classnames({
      [flexboxgrid.reverse]: reverse,

      [flexboxgrid[`${this.props.xsAlign}-xs`]]: xsAlign,
      [flexboxgrid[`${this.props.smAlign}-sm`]]: smAlign,
      [flexboxgrid[`${this.props.mdAlign}-md`]]: mdAlign,
      [flexboxgrid[`${this.props.lgAlign}-lg`]]: lgAlign,

      [flexboxgrid[`${this.props.xsVAlign}-xs`]]: xsVAlign,
      [flexboxgrid[`${this.props.smVAlign}-sm`]]: smVAlign,
      [flexboxgrid[`${this.props.mdVAlign}-md`]]: mdVAlign,
      [flexboxgrid[`${this.props.lgVAlign}-lg`]]: lgVAlign,

      [className]: true,
    });

    // The name of the variable has to start with an uppercase otherwise JSX
    // would literally create `<element>`.
    const Element = tagName;

    return (
      <Element {...this.props}
               className={classes}
               style={styles}>
        {children}
      </Element>
    );
  }
}

export default GridRow;
