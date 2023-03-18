const compareFileSizes = (path1, path2, cb) => {
    fs.stat(path1, (_error1, { size: size1 }) => {
      fs.stat(path2, (_error2, { size: size2 }) => {
        console.log(cb(null, Math.sign(size1 - size2)));
        return;
        });
      });
  };
  
  export { compareFileSizes };