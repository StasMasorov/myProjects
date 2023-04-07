export default (filepath, interval, callback) => {
    let lastCheckTime = Date.now();
  
  
    const timerId = setInterval(() => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          callback(err);
          return;
        }
        const mtime = stats.mtimeMs;
        if (mtime > lastCheckTime) {
          lastCheckTime = mtime;
          callback(null);
  
        }
  
      });
    }, interval)
    return timerId;
  };