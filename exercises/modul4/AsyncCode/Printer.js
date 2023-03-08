import fs from 'fs';


export default function print (url) {
  const callback = (_error, data) => console.log(data);
  return fs.readFile(url, 'utf-8', callback);
};

