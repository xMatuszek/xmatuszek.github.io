require('dotenv').config();

const openaiApiKey = process.env.OPENAI_API_KEY;

// Teraz możesz używać `openaiApiKey` w kodzie
console.log('Klucz API OpenAI:', openaiApiKey);


document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const userInstruction = document.getElementById('user-instruction').value;

    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: userInstruction
                },
                {
                    role: 'user',
                    content: userInput
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        let diffText = '';

        const userInput = document.getElementById('user-input').value.split(' ');
        const gptCorrectedText = data.choices[0].message.content;
        const correctedText = gptCorrectedText.split(' ');

        // The user input should not be cleared after the submit button is clicked

        let i = 0, j = 0;
        while (i < userInput.length - 1 || j < correctedText.length - 1) {
            if (userInput[i] === correctedText[j]) {
                diffText += userInput[i] + ' ';
                i++;
                j++;
            } else if (i < userInput.length - 1 && j < correctedText.length - 1) {
                if (userInput[i] !== correctedText[j]) {
                    diffText += '<del>' + userInput[i] + '</del> ';
                    i++;
                    if (userInput[i] !== correctedText[j]) {
                        diffText += '<ins>' + correctedText[j] + '</ins> ';
                        j++;
                    }
                }
            } else if (i < userInput.length - 1) {
                diffText += '<del>' + userInput[i] + '</del> ';
                i++;
            } else if (j < correctedText.length - 1) {
                diffText += '<ins>' + correctedText[j] + '</ins> ';
                j++;
            }
        }

        if (userInput[i] === correctedText[j].slice(0, -1)) {
            diffText += userInput[i] + '. ';
        } else {
            diffText += '<del>' + userInput[i] + '</del> ';
            diffText += '<ins>' + correctedText[j] + '</ins> ';
        }

        document.getElementById('corrected-text').innerHTML = diffText;
    })
    .catch(error => console.error('Error:', error));
});