export default function (path, data, cb) {
    fs.writeFile(path, data, (error, data) => {
      cb(error, console.log('complete', data));
    })
  }
  