import flexboxgrid from 'flexboxgrid';


export function classPrefix(suffix) {
  return function (v) {
    return flexboxgrid[v + '-' + suffix];
  };
}

export function classSuffix(prefix) {
  return function (v) {
    return flexboxgrid[prefix + (v ? '-' + v : '')];
  };
}

export function classExists(className) {
  return function () {
    return flexboxgrid[className];
  };
}
