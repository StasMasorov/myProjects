export const exchange = async (filepath1, filepath2) => {
    const firstFile = fsp.readFile(filepath1)
    const secondFile = fsp.readFile(filepath2)
  
    const [data1, data2] = await Promise.all([firstFile, secondFile]);
    await fsp.writeFile(filepath1, `${data2}`)
    await fsp.writeFile(filepath2, `${data1}`)
  }


//   Реализуйте и экспортируйте асинхронную функцию exchange(), которая обменивает содержимое двух файлов.

// import { exchange } from './file.js';

// exchange('/myfile1', '/myfile2');