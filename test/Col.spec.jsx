import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { classPrefix, classSuffix, classExists } from './test-utils';
import Col from '../src/Col';


describe('Testing Column', function () {

  const renderer = TestUtils.createRenderer();
  const classMap = {
    xs: classSuffix('col-xs'),
    sm: classSuffix('col-sm'),
    md: classSuffix('col-md'),
    lg: classSuffix('col-lg'),
    xsOffset: classSuffix('col-xs-offset'),
    smOffset: classSuffix('col-sm-offset'),
    mdOffset: classSuffix('col-md-offset'),
    lgOffset: classSuffix('col-lg-offset'),
    xsReorder: classPrefix('xs'),
    smReorder: classPrefix('sm'),
    mdReorder: classPrefix('md'),
    lgReorder: classPrefix('lg'),
    reverse: classExists('reverse'),
  };

  function checkAllProps(className, props) {
    Object.keys(classMap).forEach(function (prop) {
      if (prop in props) {
        const value = props[prop];
        if (value) {
          expect(className).toContain(classMap[prop](value));
        } else {
          expect(className).toNotContain(classMap[prop](value));
        }
      }
    });
  }

  it('should render a Col', function () {
    renderer.render(<Col xs={12} sm={8} md={6} lg={4} />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    checkAllProps(className, { xs: 12, sm: 8, md: 6, lg: 4 });
  });

  it('should preserve class name', function () {
    renderer.render(<Col xs={12} className="foo" />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(className).toContain('foo');
    checkAllProps(className, { xs: 12 });
  });

});
