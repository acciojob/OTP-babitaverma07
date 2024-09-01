//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    function handleInput(e) {
        const currentInput = e.target;
        const value = currentInput.value;

        if (value.length === 1) {
            // Move focus to next input
            const nextInput = Array.from(inputs).find(input => input === currentInput.nextElementSibling);
            if (nextInput) nextInput.focus();
        }
    }

    function handleKeyDown(e) {
        const currentInput = e.target;

        if (e.key === 'Backspace' && currentInput.value === '') {
            // Move focus to previous input
            const prevInput = Array.from(inputs).find(input => input === currentInput.previousElementSibling);
            if (prevInput) prevInput.focus();
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeyDown);
    });

    // Automatically focus on the first input field when the page loads
    inputs[0].focus();
});
