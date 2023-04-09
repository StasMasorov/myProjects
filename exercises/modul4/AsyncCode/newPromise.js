// BEGIN (write your solution here)
export default (ms) => {
    const timer = new Promise((resolve) => setTimeout(resolve, ms))
    return timer;
  }
  // END
  