class Truncater {
    static defaultOptions = {
    separator: '...',
    length: 200,
  };
  
  constructor (options = {}) {
    this.options = { ...Truncater.defaultOptions, ...options };
  };

  truncate(string, trauncOptions = {}) {
    const opt = {
      options: { ...this.options, ...trauncOptions }
    };
      console.log(opt);
    const simbolArr = string.split('');
    let newStr = '';
    for (let i = 0; i < opt.options.length; i++) {
      if (newStr.length < string.length) {
              newStr += simbolArr[i];
      };
    };
    
    if (string.length > opt.options.length) {
      newStr += opt.options.separator;
    };
    
    return newStr;
    
  };
};