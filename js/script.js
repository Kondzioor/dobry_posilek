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

const quest7 = document.querySelectorAll(".question7");
const photos7 = document.querySelector(".show-section7")

const quest8 = document.querySelectorAll(".question8");
const photos8 = document.querySelector(".show-section8")

const quest9 = document.querySelectorAll(".question9");
const photos9 = document.querySelector(".show-section9")

const quest10 = document.querySelectorAll(".question10");
const photos10 = document.querySelector(".show-section10")

const quest11 = document.querySelectorAll(".question11");
const photos11 = document.querySelector(".show-section11")

const quest12 = document.querySelectorAll(".question12");
const photos12 = document.querySelector(".show-section12")

const quest13 = document.querySelectorAll(".question13");
const photos13 = document.querySelector(".show-section13")

const quest14 = document.querySelectorAll(".question14");
const photos14 = document.querySelector(".show-section14")

const quest15 = document.querySelectorAll(".question15");
const photos15 = document.querySelector(".show-section15")

const quest16 = document.querySelectorAll(".question16");
const photos16 = document.querySelector(".show-section16")

const quest17 = document.querySelectorAll(".question17");
const photos17 = document.querySelector(".show-section17")

const quest18 = document.querySelectorAll(".question18");
const photos18 = document.querySelector(".show-section18")

const quest19 = document.querySelectorAll(".question19");
const photos19 = document.querySelector(".show-section19")

const quest20 = document.querySelectorAll(".question20");
const photos20 = document.querySelector(".show-section20")

const quest21 = document.querySelectorAll(".question21");
const photos21 = document.querySelector(".show-section21")

const quest22 = document.querySelectorAll(".question22");
const photos22 = document.querySelector(".show-section22")

const quest23 = document.querySelectorAll(".question23");
const photos23 = document.querySelector(".show-section23")

const quest24 = document.querySelectorAll(".question24");
const photos24 = document.querySelector(".show-section24")

const quest25 = document.querySelectorAll(".question25");
const photos25 = document.querySelector(".show-section25")

const quest26 = document.querySelectorAll(".question26");
const photos26 = document.querySelector(".show-section26")

const quest27 = document.querySelectorAll(".question27");
const photos27 = document.querySelector(".show-section27")

const quest28 = document.querySelectorAll(".question28");
const photos28 = document.querySelector(".show-section28")

const quest29 = document.querySelectorAll(".question29");
const photos29 = document.querySelector(".show-section29")

const quest30 = document.querySelectorAll(".question30");
const photos30 = document.querySelector(".show-section30")

const quest31 = document.querySelectorAll(".question31");
const photos31 = document.querySelector(".show-section31")

const quest32 = document.querySelectorAll(".question32");
const photos32 = document.querySelector(".show-section32")

const quest33 = document.querySelectorAll(".question33");
const photos33 = document.querySelector(".show-section33")

const quest34 = document.querySelectorAll(".question34");
const photos34 = document.querySelector(".show-section34")

const quest35 = document.querySelectorAll(".question35");
const photos35 = document.querySelector(".show-section35")

const quest36 = document.querySelectorAll(".question36");
const photos36 = document.querySelector(".show-section36")

const quest37 = document.querySelectorAll(".question37");
const photos37 = document.querySelector(".show-section37")

const quest38 = document.querySelectorAll(".question38");
const photos38 = document.querySelector(".show-section38")

const quest39 = document.querySelectorAll(".question39");
const photos39 = document.querySelector(".show-section39")

const quest40 = document.querySelectorAll(".question40");
const photos40 = document.querySelector(".show-section40")

const quest41 = document.querySelectorAll(".question41");
const photos41 = document.querySelector(".show-section41")

const quest42 = document.querySelectorAll(".question42");
const photos42 = document.querySelector(".show-section42")
const quest43 = document.querySelectorAll(".question43");
const photos43 = document.querySelector(".show-section43")

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
quest7.forEach((q7) => {
  q7.addEventListener("click", () =>{
      q7.classList.toggle("active");
      photos7.classList.toggle("show")
  })
})
quest8.forEach((q8) => {
  q8.addEventListener("click", () =>{
      q8.classList.toggle("active");
      photos8.classList.toggle("show")
  })
})
quest9.forEach((q9) => {
  q9.addEventListener("click", () =>{
      q9.classList.toggle("active");
      photos9.classList.toggle("show")
  })
})
quest10.forEach((q10) => {
  q10.addEventListener("click", () =>{
      q10.classList.toggle("active");
      photos10.classList.toggle("show")
  })
})
quest11.forEach((q11) => {
  q11.addEventListener("click", () =>{
      q11.classList.toggle("active");
      photos11.classList.toggle("show")
  })
})
quest12.forEach((q12) => {
  q12.addEventListener("click", () =>{
      q12.classList.toggle("active");
      photos12.classList.toggle("show")
  })
})
quest13.forEach((q13) => {
  q13.addEventListener("click", () =>{
      q13.classList.toggle("active");
      photos13.classList.toggle("show")
  })
})
quest14.forEach((q14) => {
  q14.addEventListener("click", () =>{
      q14.classList.toggle("active");
      photos14.classList.toggle("show")
  })
})
quest15.forEach((q15) => {
  q15.addEventListener("click", () =>{
      q15.classList.toggle("active");
      photos15.classList.toggle("show")
  })
})
quest16.forEach((q16) => {
  q16.addEventListener("click", () =>{
      q16.classList.toggle("active");
      photos16.classList.toggle("show")
  })
})
quest17.forEach((q17) => {
  q17.addEventListener("click", () =>{
      q17.classList.toggle("active");
      photos17.classList.toggle("show")
  })
})
quest18.forEach((q18) => {
  q18.addEventListener("click", () =>{
      q18.classList.toggle("active");
      photos18.classList.toggle("show")
  })
})
quest19.forEach((q19) => {
  q19.addEventListener("click", () =>{
      q19.classList.toggle("active");
      photos19.classList.toggle("show")
  })
})
quest20.forEach((q20) => {
  q20.addEventListener("click", () =>{
      q20.classList.toggle("active");
      photos20.classList.toggle("show")
  })
})
quest21.forEach((q21) => {
  q21.addEventListener("click", () =>{
      q21.classList.toggle("active");
      photos21.classList.toggle("show")
  })
})
quest22.forEach((q22) => {
  q22.addEventListener("click", () =>{
      q22.classList.toggle("active");
      photos22.classList.toggle("show")
  })
})
quest23.forEach((q23) => {
  q23.addEventListener("click", () =>{
      q23.classList.toggle("active");
      photos23.classList.toggle("show")
  })
})
quest24.forEach((q24) => {
  q24.addEventListener("click", () =>{
      q24.classList.toggle("active");
      photos24.classList.toggle("show")
  })
})
quest25.forEach((q25) => {
  q25.addEventListener("click", () =>{
      q25.classList.toggle("active");
      photos25.classList.toggle("show")
  })
})
quest26.forEach((q26) => {
  q26.addEventListener("click", () =>{
      q26.classList.toggle("active");
      photos26.classList.toggle("show")
  })
})
quest27.forEach((q27) => {
  q27.addEventListener("click", () =>{
      q27.classList.toggle("active");
      photos27.classList.toggle("show")
  })
})
quest28.forEach((q28) => {
  q28.addEventListener("click", () =>{
      q28.classList.toggle("active");
      photos28.classList.toggle("show")
  })
})

quest29.forEach((q29) => {
  q29.addEventListener("click", () =>{
      q29.classList.toggle("active");
      photos29.classList.toggle("show")
  })
})
quest30.forEach((q30) => {
  q30.addEventListener("click", () =>{
      q30.classList.toggle("active");
      photos30.classList.toggle("show");
  })
})

quest31.forEach((q31) => {
  q31.addEventListener("click", () =>{
      q31.classList.toggle("active");
      photos31.classList.toggle("show");
  })
})

quest32.forEach((q32) => {
  q32.addEventListener("click", () =>{
      q32.classList.toggle("active");
      photos32.classList.toggle("show");
  })
})

quest33.forEach((q33) => {
  q33.addEventListener("click", () =>{
      q33.classList.toggle("active");
      photos33.classList.toggle("show");
  })
})

quest34.forEach((q34) => {
  q34.addEventListener("click", () =>{
      q34.classList.toggle("active");
      photos34.classList.toggle("show");
  })
})

quest35.forEach((q35) => {
  q35.addEventListener("click", () =>{
      q35.classList.toggle("active");
      photos35.classList.toggle("show");
  })
})

quest36.forEach((q36) => {
  q36.addEventListener("click", () =>{
      q36.classList.toggle("active");
      photos36.classList.toggle("show");
  })
})

quest37.forEach((q37) => {
  q37.addEventListener("click", () =>{
      q37.classList.toggle("active");
      photos37.classList.toggle("show");
  })
})

quest38.forEach((q38) => {
  q38.addEventListener("click", () =>{
      q38.classList.toggle("active");
      photos38.classList.toggle("show");
  })
})

quest39.forEach((q39) => {
  q39.addEventListener("click", () =>{
      q39.classList.toggle("active");
      photos39.classList.toggle("show");
  })
})

quest40.forEach((q40) => {
  q40.addEventListener("click", () =>{
      q40.classList.toggle("active");
      photos40.classList.toggle("show");
  })
})

quest41.forEach((q41) => {
  q41.addEventListener("click", () =>{
      q41.classList.toggle("active");
      photos41.classList.toggle("show");
  })
})

quest42.forEach((q42) => {
  q42.addEventListener("click", () =>{
      q42.classList.toggle("active");
      photos42.classList.toggle("show");
  })
})
quest43.forEach((q43) => {
  q43.addEventListener("click", () =>{
      q43.classList.toggle("active");
      photos43.classList.toggle("show");
  })
})