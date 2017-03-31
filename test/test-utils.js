import flexboxgrid from "flexboxgrid";

export function classPrefix(suffix) {
  return (v) => {
    return flexboxgrid[v + "-" + suffix];
  };
}

export function classSuffix(prefix) {
  return (v) => {
    return flexboxgrid[prefix + (v ? "-" + v : "")];
  };
}

export function classExists(className) {
  return () => {
    return flexboxgrid[className];
  };
}
