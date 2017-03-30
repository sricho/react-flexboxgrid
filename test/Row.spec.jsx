import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { classPrefix, classExists } from './test-utils';
import Row from '../src/Row';


describe('Testing Row', function () {

  const renderer = TestUtils.createRenderer();
  const classMap = {
    xsHAlign: classPrefix('xs'),
    smHAlign: classPrefix('sm'),
    mdHAlign: classPrefix('md'),
    lgHAlign: classPrefix('lg'),
    xsVAlign: classPrefix('xs'),
    smVAlign: classPrefix('sm'),
    mdVAlign: classPrefix('md'),
    lgVAlign: classPrefix('lg'),
    xsDistribution: classPrefix('xs'),
    smDistribution: classPrefix('sm'),
    mdDistribution: classPrefix('md'),
    lgDistribution: classPrefix('lg'),
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

  it('should render a Row', function () {
    renderer.render(<Row />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    checkAllProps(className, {});
  });

  it('should preserve class name', function () {
    renderer.render(<Row className="foo" />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(className).toContain('foo');
    checkAllProps(className, {});  // validate there are no other classes
  });

});
