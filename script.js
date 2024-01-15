document.getElementById('convert-btn').addEventListener('click', function() {
    const apiKey = '763c5768-7275-4e3b-9684-808deec2ac76';
    const crypto = document.getElementById('crypto-select').value.toUpperCase();
    const amount = document.getElementById('crypto-amount').value;
    const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${crypto}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.data && data.data[crypto] && data.data[crypto].quote && data.data[crypto].quote.USD) {
            const cryptoToUsd = data.data[crypto].quote.USD.price;
            const usdToCustomToken = amount * cryptoToUsd / 0.01; // 1 token = 0.01 USD
            document.getElementById('result').innerText = `Equivalent in Custom Tokens: ${usdToCustomToken.toFixed(2)}`;
        } else {
            throw new Error('Invalid response');
        }
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
        document.getElementById('result').innerText = 'Error fetching conversion data.';
    });
});
