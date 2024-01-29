const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/correct', async (req, res) => {
    const userInput = req.body.userInput;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'Correct grammar.'
                },
                {
                    role: 'user',
                    content: userInput
                }
            ]
        })
    });

    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));