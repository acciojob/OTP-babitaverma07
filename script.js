//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (input.value.length === 1) {
                // Move to the next input field if there is one
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                // Move to the previous input field if there is one
                if (index > 0 && inputs[index].value === '') {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    // Optional: Automatically focus on the first input when the page loads
    inputs[0].focus();
});
