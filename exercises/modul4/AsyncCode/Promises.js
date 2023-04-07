import fsp from 'fs/promises';


const reverse = (filepath) => {
    return fsp.readFile(filepath, 'utf-8')
    .then((data) => data.split('\n'))
    .then((data1) => data1.reverse())
    .then((data2) => data2.join('\n'))
    .then((data3) => fsp.writeFile(filepath, data3, 'utf-8'))

} 



// Альтернативный вариант

const reverse2 = (filepath) =>  fsp.readFile(filepath, 'utf-8') // Данная запись равносильна автоматическому return
    .then((data) => {
       const newData = data.split('\n').reverse().join('\n');
       return fsp.writeFile(filepath, newData, 'utf-8')
    });

// Альтернативный вариант

const reverse3 = (filepath) => {
    return fsp.readFile(filepath, 'utf-8') 
    .then((data) => {
       const newData = data.split('\n').reverse().join('\n');
       return fsp.writeFile(filepath, newData, 'utf-8')
    });
} 


// Главное - нужно возвращать промис, чтобы можно было воспользоваться реузльтатом.
// В первом варианте это все один промис
// Во втором и третьем у нас два промиса и два return соответствено

