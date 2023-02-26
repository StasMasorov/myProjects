export default make = (numer = null, denom = null) => {
    const rational = {
      numer: numer,
      denom: denom,
      setNumer: function (num) {
        return this.numer = num;
      },
      setDenom: function (num) {
        return this.denom = num;
      },
      getNumer: function (num) {
        return this.numer;
      },
      getDenom: function (num) {
        return this.denom;
      },
      toString: function () {
        return `${this.numer}/${this.denom}`;
      },
      add: function (other) {
        const newNumer = (this.numer * other.denom) + (other.numer * this.denom);
        const newDenom = this.denom * other.denom;
        return make(newNumer, newDenom);
      }
    };
    return rational;
  };