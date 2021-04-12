const currencyEl_one = document.getElementById('currency_one');
const amountEl_one = document.getElementById('amount_one');
const currencyEl_two = document.getElementById('currency_two');
const amountEl_two = document.getElementById('amount_two');

const rateEl = document.getElementById('rate'); // Empty Div Gets Populated Dynamically
const swap = document.getElementById('swap');   // Handles our switching of conversion

// Fetch exchange rates and update the dom
function calculate() {
  const currency_one = currencyEl_one.value;  // Base Country Code
  const currency_two = currencyEl_two.value;  // Conversion Country Code

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} =  ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    })
}

function updateSwap() {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);

swap.addEventListener('click', function () {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
})


calculate();
