import fsp from 'fs/promises';

export const touch = (filePath) => {
  return fsp.access(filePath)
    .catch(() => fsp.writeFile(filePath, ''))
    .then(() => console.log('created!'))
}
