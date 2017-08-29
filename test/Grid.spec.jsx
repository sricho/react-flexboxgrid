import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import { classExists } from './test-utils';
import Grid from '../src/Grid';


describe('Testing Grid', function () {

  const renderer = TestUtils.createRenderer();
  const classMap = {
    fluid: classExists('container-fluid'),
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

  it('should render a Grid', function () {
    renderer.render(<Grid />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    checkAllProps(className, {});
  });

  it('should render a fluid Grid', function () {
    renderer.render(<Grid fluid />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(type).toBe('div');
    checkAllProps(className, { fluid: true });
  });

  it('should preserve class name', function () {
    renderer.render(<Grid className="foo" />);

    const { type, props: { className } } = renderer.getRenderOutput();
    expect(className).toContain('foo');
    checkAllProps(className, {});  // validate there are no other classes
  });

});
