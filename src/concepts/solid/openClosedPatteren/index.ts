// What is Open Closed Pattern?
// It defines that a class, module, functions, etc. should be open for
// extension but should be closed for modification.

class Payment {
  payment(type: "jazz-cash" | "hbl", amount: number) {
    if (type === "jazz-cash") {
      return "jazz-cash";
    } else {
      return "HBL";
    }
  }
}

const payment = new Payment();

console.log(payment.payment("jazz-cash", 20));

// In the upper example if we have to add another payment method.
// Then we have to modify the prev code
// But this pattern define that modification should be closed

interface PaymentMethod {
  pay(amount: number): string;
}

class JazzCash implements PaymentMethod {
  pay(amount: number): string {
    return `Paying ${amount} using JazzCash`;
  }
}

class HBL implements PaymentMethod {
  pay(amount: number): string {
    return `Paying ${amount} using HBL`;
  }
}

function paymentDone(amount: number, method: PaymentMethod) {
  return method.pay(amount);
}

const jazzCash = new JazzCash();
const hbl = new HBL();

console.log(paymentDone(200, jazzCash));
console.log(paymentDone(200, hbl));

// Now if we have to add a new payment method later in the code we can extend
// it and don't have to modify the existing code.
