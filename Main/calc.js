const cartPrices = [
    { cart: 'ICON i40', price: 8500 },
    { cart: 'ICON i40L', price: 8995 },
    { cart: 'ICON i60', price: 10000 },
    { cart: 'ICON i60L', price: 11000 },
    { cart: 'EPIC e40', price: 10500 },
    { cart: 'EPIC e40L', price: 11500 },
    { cart: 'EPIC e60', price: 12500 },
    { cart: 'EPIC e60L', price: 13500 }
]

const modelSelect = document.getElementById("cart-model");
const downInput = document.getElementById("down-payment");
const rateInput = document.getElementById("interest-rate");
const rateDisplay = document.getElementById("rate-value");
const yearSelect = document.getElementById("loan-years");
const paymentDisplay = document.getElementById("monthly-payment");

cartPrices.forEach(({ cart, price }) => {
    const opt = document.createElement("option");
    opt.textContent = cart;
    opt.value = price;
    modelSelect.appendChild(opt)
});

const calculatePayment = () => {
    const model = parseFloat(modelSelect.value);
    const down = parseFloat(downInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseFloat(yearSelect.value);
    
    const principal = model - down;
    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;
    
    let payment = 0;
    if (monthlyRate === 0) {
        payment = principal / payments;
        
    } else {
        payment =
            (principal * (monthlyRate * Math.pow(1 + monthlyRate, payments))) /
            (Math.pow(1 + monthlyRate, payments) - 1);
    }
    
    paymentDisplay.textContent = `$${payment.toFixed(2)}`;
    rateDisplay.textContent = `${rate}%`;
}

[modelSelect, downInput, rateInput, yearSelect].forEach(el => el.addEventListener("input", calculatePayment));

calculatePayment();