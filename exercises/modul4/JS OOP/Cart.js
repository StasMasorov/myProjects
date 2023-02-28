export default class Cart {
    constructor() {
      this.items = [];
    };
  
    addItem(item, count) {
      this.items.push({ item, count });
    };
    getItems() {
      return this.items;
    };
    getCost() {
      return this.items.map(unit => {
        return unit.item.price * unit.count;
      }).reduce((a, b) => a + b, 0);
    };
    getCount() {
      return this.items.map(unit => {
        return unit.count;
      }).reduce((a, b) => a + b, 0);
    }
  };