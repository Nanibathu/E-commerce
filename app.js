// script.js
const tShirtColorSelect = document.getElementById('t-shirt-color');
const designUploadInput = document.getElementById('design-upload');
const generateDesignButton = document.getElementById('generate-design');
const downloadDesignButton = document.getElementById('download-design');
const designPreviewImage = document.getElementById('design-preview');

generateDesignButton.addEventListener('click', () => {
    const selectedColor = tShirtColorSelect.value;
    const uploadedDesign = designUploadInput.files[0];
    const designPreviewUrl = URL.createObjectURL(uploadedDesign);

    designPreviewImage.src = designPreviewUrl;
    designPreviewImage.alt = `Design Preview on ${selectedColor} T-Shirt`;
});

downloadDesignButton.addEventListener('click', () => {
    const designPreviewImageSrc = designPreviewImage.src;
    const link = document.createElement('a');
    link.href = designPreviewImageSrc;
    link.download = 'customized_tshirt_design.png';
    link.click();
});