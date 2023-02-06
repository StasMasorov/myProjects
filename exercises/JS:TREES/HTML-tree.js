
import _ from 'lodash';

export default changeClass = (tree, oldClass, newClass) => {
  const innerFunc = (node) => {
    const newNode = { ...node };

    if (node.className === oldClass) {
      newNode.className = newClass;
      }

    if (node.type === 'tag-internal') {
      const newChildren = node.children.map(innerFunc);
      newNode.children = newChildren;
    }

    return newNode;
    };
  return innerFunc(tree);
};


console.log('ello');