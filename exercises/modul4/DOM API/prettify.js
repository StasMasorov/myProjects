export default (document) => {
    const divs = document.querySelectorAll('div');
    divs.forEach((div) => {
      const texts = [...div.childNodes]
        .filter((child) => child instanceof Text)
        .filter((child) => child.textContent.trim() !== '');
      texts.forEach((node) => {
        const p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      });
    });
  };