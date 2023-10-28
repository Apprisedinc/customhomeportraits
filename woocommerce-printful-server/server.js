const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/order', async (req, res) => {
    const orderData = req.body;

    // You'll process and send this data to Printful.
    // For now, just console log it:
    console.log(orderData);

    res.send('Received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
