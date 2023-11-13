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

// -----------------------------------------------------------------------
const quest = document.querySelectorAll(".question");
const photos = document.querySelector(".show-section")

const quest1 = document.querySelectorAll(".question1");
const photos1 = document.querySelector(".show-section1")

const quest2 = document.querySelectorAll(".question2");
const photos2 = document.querySelector(".show-section2")

const quest3 = document.querySelectorAll(".question3");
const photos3 = document.querySelector(".show-section3")

const quest4 = document.querySelectorAll(".question4");
const photos4 = document.querySelector(".show-section4")

const quest5 = document.querySelectorAll(".question5");
const photos5 = document.querySelector(".show-section5")

const quest6 = document.querySelectorAll(".question6");
const photos6 = document.querySelector(".show-section6")

quest.forEach((q) => {
    q.addEventListener("click", () =>{
        q.classList.toggle("active");
        photos.classList.toggle("show")
    })
})
quest1.forEach((q1) => {
    q1.addEventListener("click", () =>{
        q1.classList.toggle("active");
        photos1.classList.toggle("show")
    })
})
quest2.forEach((q2) => {
  q2.addEventListener("click", () =>{
      q2.classList.toggle("active");
      photos2.classList.toggle("show")
  })
})
quest3.forEach((q3) => {
  q3.addEventListener("click", () =>{
      q3.classList.toggle("active");
      photos3.classList.toggle("show")
  })
})
quest4.forEach((q4) => {
  q4.addEventListener("click", () =>{
      q4.classList.toggle("active");
      photos4.classList.toggle("show")
  })
})
quest5.forEach((q5) => {
  q5.addEventListener("click", () =>{
      q5.classList.toggle("active");
      photos5.classList.toggle("show")
  })
})
quest6.forEach((q6) => {
  q6.addEventListener("click", () =>{
      q6.classList.toggle("active");
      photos6.classList.toggle("show")
  })
})