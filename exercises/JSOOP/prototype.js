export default function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    Money.prototype.getValue = function getValue() {
      return this.value;
    };
    Money.prototype.getCurrency = function getCurrency() {
      return this.currency;
    };
    Money.prototype.exchangeTo = function exchsngeTo(newCurrency) {
      if (newCurrency === 'usd' && this.currency === 'eur') {
        return new Money((this.value * 1.2), 'usd');
      }
      else if (newCurrency === 'eur' && this.currency === 'usd') {
        return new Money((this.value * 0.7), 'eur');
      }
      else {
        return new Money(this.value, this.currency);
      }
    };
    Money.prototype.add = function add(money) {
      if (this.currency === 'usd' && money.currency === 'eur') {
        const newValue = this.value + money.value * 1.2;
        return new Money(newValue, this.currency);
      }
      else if (this.currency === 'eur' && money.currency === 'usd') {
        const newValue = this.value + money.value * 0.7;
        return new Money(newValue, this.currency);
      }
      else {
        const newValue = this.value + money.value;
        return new Money(newValue, this.currency);
      }
    };
    Money.prototype.format = function format() {
      return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency });
    };
  };