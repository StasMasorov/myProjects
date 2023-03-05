export default class Url {
    constructor(url) {
      const buffUrl = new URL(url);
      this.href = buffUrl.href;
      this.protocol = url.split('://')[0];
      this.host = buffUrl.hostname;
      this.queryParams = buffUrl.searchParams;
    }
  
    getScheme() {
      return this.protocol;
    }
  
    getHostName() {
      return this.host;
    }
  
    getQueryParams() {
      const params = [];
      for (let key of this.queryParams) {
        params.push(key);
      }
      return Object.fromEntries(params);
    }
  
    getQueryParam(key, exit = null) {
      let params = [];
      for (let unit of this.queryParams) {
        params.push(unit);
      }
      params = Object.fromEntries(params);
      return params[key] ? params[key] : exit;
    }
  
    equals(url) {
      return url.href === this.href ? true : false;
    }
  };