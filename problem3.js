class SequenceGenerator {
  constructor(a) {
    this.a = a;
  }

  generateUpToOdd() {
    const result = [];
    
    const maxOdd = (this.a % 2 === 0) ? this.a - 1 : this.a;
    
    for (let i = 1; i <= maxOdd; i += 2) {
      result.push(i);
    }
    return result;
  }
}


[1,2,3,4,5,6,7].forEach(n => {
  const arr = new SequenceGenerator(n).generateUpToOdd();
  console.log(`a = ${n} → ${arr.join(', ')}`);
});
