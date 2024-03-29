document.getElementById('submit-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    // const userInstruction = document.getElementById('user-instruction').value;

    fetch('http://localhost:3000/api/correct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userInput: userInput,
            userInstruction: 'Correct grammar.'
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