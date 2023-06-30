const checkTextInput = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });

        input.addEventListener('input', () => {
            input.style.cssText = 'border: none';

            if (input.value.match(/[^а-яё 0-9]/ig)) {
                input.value = '';
                input.style.cssText = 'border: 1px solid red';
            }
        });
        
    });


};

export default checkTextInput;