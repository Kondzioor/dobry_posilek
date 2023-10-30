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


const fontButton = document.getElementById('fontButton');
        const fontChangeableElements = document.querySelectorAll('.font-changeable');
        let fontSizeState = 0; // 0: domyślny rozmiar, 1: większy rozmiar, 2: największy rozmiar

        fontButton.addEventListener('click', () => {
            fontSizeState = (fontSizeState + 1) % 3;

            switch (fontSizeState) {
                case 0:
                    fontChangeableElements.forEach(element => {
                        element.style.fontSize = '16px';
                    });
                    fontButton.textContent = 'Większa czcionka';
                    break;
                case 1:
                    fontChangeableElements.forEach(element => {
                        element.style.fontSize = '20px';
                    });
                    fontButton.textContent = 'Największa czcionka';
                    break;
                case 2:
                    fontChangeableElements.forEach(element => {
                        element.style.fontSize = '24px';
                    });
                    fontButton.textContent = 'Czcionka domyślna';
                    break;
            }
        });

const contrastButton = document.getElementById('contrastButton');
        let isHighContrast = false;

        contrastButton.addEventListener('click', () => {
            isHighContrast = !isHighContrast;
            const contrastChangeableElements = document.querySelectorAll('.contrast-changeable');

            if (isHighContrast) {
                document.body.classList.add('high-contrast'); /* Dodaj klasę do body, aby zmienić kontrast dla elementów z klasą .contrast-changeable */
                contrastChangeableElements.forEach(element => {
                    element.classList.add('high-contrast');
                });
            } else {
                document.body.classList.remove('high-contrast'); /* Usuń klasę, aby przywrócić domyślny kontrast */
                contrastChangeableElements.forEach(element => {
                    element.classList.remove('high-contrast');
                });
            }
        });