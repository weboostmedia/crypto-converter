body {
    font-family: 'Helvetica Neue', sans-serif;
    background-color: transparent;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

.converter-container {
    background: rgba(255, 255, 255, 0.2);
    padding: 30px;
    border-radius: 40px;
    text-align: center;
    width: 380px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
}

input, button {
    width: calc(100% - 40px);
    padding: 8px;
    margin: 20px 0;
    border-radius: 20px;
    border: 2px solid #000000;
    background: rgba(255, 255, 255, 0.1);
    color: #000000;
    font-size: 1.3em;
}

select {
    width: calc(100% - 40px);
    padding: 8px;
    margin: 20px 0;
    border-radius: 20px;
    border: 2px solid #ffffff;
    background: #333333; /* Darker background */
    color: #ffffff; /* White text */
    font-size: 1.3em;
}

button {
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #367c39;
}

#result {
    margin-top: 20px;
    font-size: 1.2em;
    color: #000000;
    word-wrap: break-word;
}

/* Loading animation styles can remain as they are */
