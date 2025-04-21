function setupCopyButton() {
    const copyBtn = document.getElementById('copy_btn');
    if (!copyBtn) return;

    const copyText = document.getElementById('copy_text');
    const inputText = document.querySelector('textarea[name="input_text"]');
    
    const copiedMessage = document.createElement('div');
    copiedMessage.className = 'copied-message';
    copiedMessage.textContent = 'Copiado!';
    copyBtn.parentNode.appendChild(copiedMessage);
    
    copyBtn.addEventListener('click', function() {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value)
            .then(() => {
                copiedMessage.classList.add('show');
                setTimeout(() => {
                    copiedMessage.classList.remove('show');
                }, 2000);
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
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

document.getElementById('catButton').addEventListener('click', function() {
    fetch("/get-cat")
        .then(response => response.json())
        .then(data => {
            if (data.image) {
                document.getElementById('animalImage').src = data.image;
                this.textContent = 'Quer outro gato? Clique aqui!';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
});
document.addEventListener('DOMContentLoaded', function() {
    setupCatButton();
});