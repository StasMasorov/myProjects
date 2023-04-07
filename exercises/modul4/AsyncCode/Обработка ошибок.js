
export function move(readPath, writePath, cb) {
  fs.readFile(readPath, (error1, data1) => {
    if (error1) {
      cb(error1, data1);
      return;
    }

    fs.writeFile(writePath, data1, (error2) => {
      if (error2) {
        cb(error2);
        return;
      }

      fs.unlink(readPath, (error3) => {
        cb(error3);
      });
    });
  });
}
