      // Проходит первые два теста 

export const getDirectorySize = (dirpath) => fsp.readdir(dirpath).then((dirs) => dirs.map((dirName) => path.join(dirpath, dirName)))
      .then((filepaths) => filepaths.map((filePath) => fsp.stat(filePath)))
      .then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))

// BEGIN (write your solution here)
export const getDirectorySize = (dirpath) => {
  const promises = fsp.readdir(dirpath)
  .then((dirs) => dirs.map((dirName) => path.join(dirpath, dirName)))
  .then((filepaths) => filepaths.map((filePath) => fsp.stat(filePath)))
  
  const promise = Promise.all(promises);

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))
}
// END