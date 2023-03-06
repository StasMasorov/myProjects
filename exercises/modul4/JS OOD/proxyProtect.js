export default function protect(obj) {
    const p = new Proxy(obj, {
      get: (target, prop) => {
        if (!(prop in target)) {
          throw new Error(`Error`);
        }
        if (prop.startsWith('_')) {
          throw new Error(`Error`);
        }
        if (typeof target[prop] === 'function') {
          return target[prop].bind(obj);
        } else {
          return target[prop];
        }
      },
  
      set: (target, prop, value) => {
        if (!(prop in target)) {
          throw new Error(`Error`);
        }
        if (prop.startsWith('_')) {
          throw new Error(`Error`);
        }
        target[prop] = value;
        return true;
      },
    });
    return p;
  }; 