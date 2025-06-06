let numButtons = document.querySelectorAll('.inputNum button');
let output = document.querySelector('.output');
let elementButtons = document.querySelectorAll('.element button');
let equalButton = document.querySelector('.equal');
let clearButton = document.querySelector('.remove');

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        output.textContent += button.textContent;
    });
});

elementButtons.forEach(button => {
    button.addEventListener('click', () => {
        output.textContent += button.textContent;
    });
});

equalButton.addEventListener('click', () => {
    try {
        output.textContent = eval(output.textContent);
    } catch {
        output.textContent = 'Error';
    }
});

clearButton.addEventListener('click', () => {
    output.textContent = '';
});
