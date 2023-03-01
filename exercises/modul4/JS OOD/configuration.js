const hasNumber = (string) => (string.search(/\d/) !== -1);

// BEGIN (write your solution here)
export default class PasswordValidator {
  constructor(options = {}) {
    const defaultOptions = {
      minLength: 8,
      containNumbers: true,
    };

    this.options = { ...defaultOptions, ...options };
  };

  validate(password) {
    const result = {};

    if (password.length < this.options.minLength) {
      result.minLength = 'too small';
    };

    const numArray = password.split('').filter(unit => Number.parseInt(unit) || unit === '0');
    const numOption = this.options.containNumbers === true ? 1 : 0;
    if (numArray.length < numOption) {
      result.containNumbers = 'should contain at least one number';
    };
    return result;
  };
};