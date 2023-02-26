export default each = (objects, callback) => {
    return objects.forEach((obj) => callback.call(obj));
  };
  