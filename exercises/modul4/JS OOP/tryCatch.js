export default class ParseError extends Error {
    constructor(message) {
      super(message);
      this.name = 'ParseError';
    }
  }
  

import ParseError from './ParseError.js.js.js';

export function parseJson(json) {
    try {
      return JSON.parse(json);
    }
    catch (e) {
      throw new ParseError('Invalid JSON string');
    }
  };