export default flatten = (list) => {
    const result = list.reduce((acc, item) => {
      if (Array.isArray(item)) {
        return acc.concat(flatten(item));
      }
      return acc.concat(item);
    }, []);
    return result;
  };

