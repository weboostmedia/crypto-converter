document.getElementById('convert-btn').addEventListener('click', function() {
    const crypto = document.getElementById('crypto-select').value;
    const amount = document.getElementById('crypto-amount').value;

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            const cryptoToUsd = data[crypto].usd;
            const usdToCustomToken = amount * cryptoToUsd / 0.01; // 1 token = 0.01 USD
            document.getElementById('result').innerText = `Equivalent in Custom Tokens: ${usdToCustomToken.toFixed(2)}`;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('result').innerText = '
