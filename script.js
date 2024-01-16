document.getElementById('convert-btn').addEventListener('click', function() {
    const crypto = document.getElementById('crypto-select').value;
    const amount = document.getElementById('crypto-amount').value;

    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            if (data[crypto] && data[crypto].usd) {
                const cryptoToUsd = data[crypto].usd;
                const usdToCustomToken = amount * cryptoToUsd / 0.001; // 1 token = 0.001 USD
                document.getElementById('result').innerText = `Equivalent in Just Stake It Tokens: ${usdToCustomToken.toFixed(2)}`;
            } else {
                throw new Error('Invalid response data');
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('result').innerText = 'Error fetching conversion data.';
        });
});
