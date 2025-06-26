class SequenceGenerator {
  constructor(a) {
    this.a = a;
  }

  generateOddSeries() {
    const result = [];
    for (let i = 1; i <= this.a; i += 2) {
      result.push(i);
    }
    return result;
  }
}

// Example usage:
const input = 7;
const series = new SequenceGenerator(input).generateOddSeries();
console.log(series.join(', ')); // Output: "1, 3, 5, 7"
