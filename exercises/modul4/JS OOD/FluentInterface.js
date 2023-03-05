function normalize (countries) {
    let countriesArr = countries;
    for (let key of countriesArr) {
      key.name = key.name.split('').filter((unit) => unit !== ' ').map((unit) => unit.toLowerCase()).join('');
      key.country = key.country.split('').filter((unit) => unit !== ' ').map((unit) => unit.toLowerCase()).join('');
    }
    const buffArr = Array.from(new Set (countriesArr.map((unit) => unit.country))).sort();
    let result = {};
    for (let element of buffArr) {
      let set = new Set();
      for (let unit of countriesArr) {
        if (unit.country === element) {
          set.add(unit.name);
        }
      }
      result[element] = Array.from(set).sort();
    }
    return result;
  };



// Эту задачу можно решить огромным числом способов. Почти наверняка ваш способ будет не такой, как решение учителя.

// Мы не даём никаких подсказок насчет того, какие функции нужно использовать. Как минимум вы знаете главную тройку map, filter и reduce.

// solution.js
// Реализуйте и экспортируйте по умолчанию функцию normalize() которая принимает на вход список городов и стран, нормализует их имена, сортирует города и группирует их по стране.

// import normalize from './solution.js';
 
// const countries = [
//   { name: 'Miami', country: 'usa' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Moscow ', country: ' Russia' },
// ];
 
// normalize(countries);
// // {
// //   russia: [
// //     'moscow',
// //     'samara',
// //   ],
// //   usa: [
// //     'miami',
// //   ],
// // }
// Подсказки
// Сигналы
// Получить только уникальные значения можно через специальный объект Set
// Урок Set