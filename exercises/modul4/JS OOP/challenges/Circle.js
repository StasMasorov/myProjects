export default class Circle {
    constructor (radius) {
      this.radius = radius;
    }
    getArea() {
      return Math.PI * (this.radius ** 2);
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  };