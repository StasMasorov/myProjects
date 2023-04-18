export default (document) => {
    // BEGIN (write your solution here)
    const title = document.querySelector('h1').textContent;
    const description = document.querySelector('.description').textContent;
    const content = document.querySelector('.links').children
    let items = []
    for (let i = 0; i < content.length; i++) {
      const title = content[i].querySelector('h2 > a').textContent;
      const description = content[i].querySelector('p').textContent;
      const result = {
        title,
        description,
      }
      items.push(result);
    }
   
    return {
      title,
      description,
      items,
    };
    // END
  };