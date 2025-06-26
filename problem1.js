class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  compute() {
    const { a, b, operation } = this;
    switch (operation) {
      case 'add':
      case '+':
        return a + b;
      case 'subtract':
      case '-':
        return a - b;
      case 'multiply':
      case '*':
        return a * b;
      case 'divide':
      case '/':
        if (b === 0) {
          throw new Error('Division by zero is not allowed');
        }
        return a / b;
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  }
}

// Usage examples:

try {
  console.log(new Calculator(10.5, 2.3, '+').compute());      
  console.log(new Calculator(10.5, 2.3, 'subtract').compute()); 
  console.log(new Calculator(5, 4, '*').compute());          
  console.log(new Calculator(9, 3, 'divide').compute());       
  console.log(new Calculator(9, 0, 'divide').compute());       
} catch (err) {
  console.error(err.message);
}
