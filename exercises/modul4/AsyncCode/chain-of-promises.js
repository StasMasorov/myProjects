export function getTypes(paths) {
  
    const result = paths.reduce((acc, path) => {
      return fsp.stat(path)
      .then((data) => data.isDirectory() ? 'directory' : 'file')
      .then((data) => acc + data)
      .catch(() => [null])
    }, [])
  
    return result;
  }

  export function getTypes(paths) {
    let initPromise = Promise.resolve([]);
    const promise = paths.reduce((acc, path) => {
      return acc
      .then((contents) =>
      fsp.stat(path)
      .then((content) => content.isDirectory() ? 'directory' : 'file')
      .then((data) => contents.concat(data))
      .catch(() => contents.concat(null)))
    }, initPromise);
  
    return promise;
  }
  