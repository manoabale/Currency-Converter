document.getElementById("convertBtn").addEventListener("click", convertCurrency);

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  if (!amount) {
    document.getElementById("result").textContent = "Enter an amount first";
    return;
  }

  const url = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const rate = data.rates[to];
    const converted = (amount * rate).toFixed(2);

    document.getElementById("result").textContent =
      `Converted Amount: ${converted} ${to}`;
  } catch (error) {
    document.getElementById("result").textContent = "Error fetching rates";
  }
}
