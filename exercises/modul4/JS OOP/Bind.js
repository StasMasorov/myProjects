export default bind = (obj, fn) => {
    const result = (...arg) => {
      return fn.apply(obj, arg);
    }
    return result;
  };