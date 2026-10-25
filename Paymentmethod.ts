
type PaymentMethod = "UPI" | "CreditCard" | "PayPal";

function makePayment(method: PaymentMethod): void {
    console.log(`Payment method chosen: ${method}`);
}

makePayment("UPI");
makePayment("CreditCard");
makePayment("PayPal")

