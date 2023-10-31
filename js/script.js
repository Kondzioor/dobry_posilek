let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    preveiwContainer.style.display = 'none';
    previewBox.forEach(preview => {
      preview.classList.remove('active');
    });
  }
});


const increaseFontButton = document.getElementById('increaseFontButton');
const decreaseFontButton = document.getElementById('decreaseFontButton');
const fontChangeableElements = document.querySelectorAll('.font-changeable');
let fontSizeMultiplier = 1.0;
let increaseClicks = 0;
let decreaseClicks = 0;

increaseFontButton.addEventListener('click', () => {
  increaseClicks++;
  if (increaseClicks % 2 === 1) {
    fontSizeMultiplier = 1.2;
  } else {
    fontSizeMultiplier = 1.0;
  }
  updateFontSizes();
});

decreaseFontButton.addEventListener('click', () => {
  decreaseClicks++;
  if (decreaseClicks % 2 === 1) {
    fontSizeMultiplier = 1 / 1.2;
  } else {
    fontSizeMultiplier = 1.0;
  }
  updateFontSizes();
});

function updateFontSizes() {
  fontChangeableElements.forEach(element => {
    const currentFontSize = window.getComputedStyle(element, null).getPropertyValue('font-size');
    const currentSize = parseFloat(currentFontSize);
    element.style.fontSize = (currentSize * fontSizeMultiplier) + 'px';
  });
}

const contrastButton = document.getElementById('contrastButton');
        let isHighContrast = false;

        contrastButton.addEventListener('click', () => {
            isHighContrast = !isHighContrast;
            const contrastChangeableElements = document.querySelectorAll('.contrast-changeable');
            const colorChangeableElements = document.querySelectorAll('.color-changeable')
            const svgPath = document.querySelector("svg path");

            if (isHighContrast) {
              document.body.style.backgroundColor = 'black';
              
                document.body.classList.add('high-contrast');
                document.body.classList.add('high-color'); 
                contrastChangeableElements.forEach(element => {
                    element.classList.add('high-contrast');
                });
                colorChangeableElements.forEach(element => {
                  element.classList.add('high-color')
                });
            } else {
              
              document.body.style.backgroundColor = 'white';
                document.body.classList.remove('high-contrast'); 
                document.body.classList.remove('high-color');
                contrastChangeableElements.forEach(element => {
                    element.classList.remove('high-contrast');
                });
                colorChangeableElements.forEach(element => {
                  element.classList.remove('high-color')
                });
            }
        });