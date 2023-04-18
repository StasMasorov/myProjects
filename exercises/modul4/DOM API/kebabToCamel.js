import 'core-js/stable';
import 'regenerator-runtime/runtime';
import camelCase from 'lodash/camelCase';


export default function (document) {
    let elements = document.body.getElementsByTagName('*')
    for (let element of elements) {
      let classes = element.classList;
      for (let i = 0; i < classes.length; i++) {
        const newClass = camelCase(classes[i]);
        element.classList.replace(classes[i], newClass);
      }
    }
  }

//   2 вариант:

// export default (document) => {
//     const allNodes = [...document.body.getElementsByTagName('*')];
//     allNodes.forEach((node) => {
//       const process = (item) => node.classList.replace(item, camelCase(item));
//       node.classList.forEach(process);
//     });
//   };