class MultipleCounter {
  constructor(arr) {
    this.arr = arr;
  }

  countMultiples() {
    const counts = {};
  
    for (let d = 1; d <= 9; d++) {
      counts[d] = 0;
    }

    this.arr.forEach(num => {
      for (let d = 1; d <= 9; d++) {
        if (num % d === 0) {
          counts[d]++;
        }
      }
    });
    return counts;
  }
}


const data = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const result = new MultipleCounter(data).countMultiples();
console.log(result);

