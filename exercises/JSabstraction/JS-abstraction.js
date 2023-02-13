const make = (href) => {
    const result = new URL(href);
    return result;
  };
  
  const getProtocol = (url) => {
    return url.protocol;
  };
  
  const getHost = (url) => {
    return url.host;
  };
  
  const getPath = (url) => {
    return url.pathname;
  };
  
  const setProtocol = (url, newProtocol) => {
    url.protocol = newProtocol;
  };
  
  const setHost = (url, newHost) => {
    url.host = newHost;
    url.hostname = newHost;
  };
  
  const setPath = (url, newPath) => {
    url.pathname = newPath;
  };
  
  const setQueryParam = (data, key, value) => {
    let params = new URLSearchParams(data.search);
    params.set(key, value);
    data.search = params.toString();
  };
  
  const getQueryParam = (data, paramName, defaultParam = null) => {
    let params = new URLSearchParams(data.search);
    const name = params.get(paramName);
    if (name === null) {
      return defaultParam;
    }
    return name;
  };
  
  const toString = (data) => {
    return data.href;
  };
  
  export { make, getProtocol, getHost, getPath, setProtocol, setHost, setPath, getQueryParam, setQueryParam, toString };