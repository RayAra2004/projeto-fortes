document.addEventListener("DOMContentLoaded", function () {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const uploadMessage = document.getElementById('uploadMessage');
    const uploadForm = document.getElementById('uploadForm');
    const errorMessage = document.getElementById('errorMessage');

    uploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    uploadArea.addEventListener('dragover', (event) => {
        event.preventDefault();
        uploadArea.classList.add('dragover');
    });

    uploadArea.addEventListener('dragleave', () => {
        uploadArea.classList.remove('dragover');
    });

    uploadArea.addEventListener('drop', (event) => {
        event.preventDefault();
        uploadArea.classList.remove('dragover');
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;  // Populate the file input element with the dropped file
            updateFileName(files[0].name);
            errorMessage.textContent = '';
        }
    });

    fileInput.addEventListener('change', () => {
        const files = fileInput.files;
        if (files.length > 0) {
            updateFileName(files[0].name);
            errorMessage.textContent = '';
        }
    });

    uploadForm.addEventListener('submit', (event) => {
        if (!fileInput.files.length) {
            event.preventDefault();
            errorMessage.textContent = 'Por favor, selecione um arquivo PDF.';
        }
    });

    function updateFileName(fileName) {
        uploadMessage.textContent = fileName;
        uploadMessage.style.color = '#333333'; // Change color to indicate selection
    }
});
