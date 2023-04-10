// https://ru.hexlet.io/code_reviews/982998

// @ts-check

import fs from 'fs';

const compare = (data1, data2) => {
  const lines1 = data1.split('\n').slice(0, -1);
  const lines2 = data2.split('\n').slice(0, -1);

  // BEGIN (write your solution here)
  const stringCount = lines1.length > lines2.length ? lines1.length : lines2.length;
  const result = [];
  for (let i = 0; i < stringCount; ++i) {
    let buff;
    if (lines1[i] === lines2[i]) {
      
    } else if (lines1[i] === undefined) {
      buff = [null, lines2[i]]
      result.push(buff)
    } else if (lines2[i] === undefined) {
      buff = [lines1[i], null]
      result.push(buff)
    } else {
      buff = [lines1[i], lines2[i]];
      result.push(buff)
    }
  }
  return result;
  // END
};

// BEGIN (write your solution here)
export default function (path1, path2, callback) {
  fs.readFile(path1, ((error, content1) => {
    if (error) {
      callback(error)
    } else {
      fs.readFile(path2, ((error1, content2) => {
        if (error1) {
          callback(error1)
        } else {
          const data = compare(content1.toString(), content2.toString())
          console.log('DATA: ', data)
          callback(null, data)
        }
      }))
    }
  }))
}
// END
