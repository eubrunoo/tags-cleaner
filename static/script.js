function setupCopyButton() {
    const copyBtn = document.getElementById('copy_btn');
    const copyText = document.getElementById('copy_text');
    const inputText = document.querySelector('textarea[name="input_text"]');

    if (!copyBtn || !copyText || !inputText) return;

    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                copiedMessage.classList.add('show');
                setTimeout(() => {
                    copiedMessage.classList.remove('show');
                }, 2000);
            })
            .catch(err => {
                console.error('Erro ao copiar:', err);
            });
    });

    function checkAndClear() {
        if (inputText.value.trim() === '') {
            copyText.value = '';
        }
    }

    inputText.addEventListener('input', checkAndClear);
    checkAndClear();
    window.addEventListener('pageshow', checkAndClear);
}

function setupCatButton() {
    const catButton = document.getElementById('catButton');
    const animalImage = document.getElementById('animalImage');

    if (!catButton || !animalImage) return;

    catButton.addEventListener('click', function () {
        fetch('/get-cat')
            .then(response => response.json())
            .then(data => {
                if (data.image) {
                    animalImage.src = data.image;
                    catButton.textContent = 'Quer outro gato? Clique aqui!';
                }
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupCopyButton();
    setupCatButton();
});
