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
const quest44 = document.querySelectorAll(".question44");
const photos44 = document.querySelector(".show-section44")

const quest45 = document.querySelectorAll(".question45");
const photos45 = document.querySelector(".show-section45")

const quest46 = document.querySelectorAll(".question46");
const photos46 = document.querySelector(".show-section46")

const quest47 = document.querySelectorAll(".question47");
const photos47 = document.querySelector(".show-section47")

const quest48 = document.querySelectorAll(".question48");
const photos48 = document.querySelector(".show-section48")

const quest49 = document.querySelectorAll(".question49");
const photos49 = document.querySelector(".show-section49")

const quest50 = document.querySelectorAll(".question50");
const photos50 = document.querySelector(".show-section50")
const quest51 = document.querySelectorAll(".question51");
const photos51 = document.querySelector(".show-section51")

const quest52 = document.querySelectorAll(".question52");
const photos52 = document.querySelector(".show-section52")

const quest53 = document.querySelectorAll(".question53");
const photos53 = document.querySelector(".show-section53")

const quest54 = document.querySelectorAll(".question54");
const photos54 = document.querySelector(".show-section54")

const quest55 = document.querySelectorAll(".question55");
const photos55 = document.querySelector(".show-section55")

const quest56 = document.querySelectorAll(".question56");
const photos56 = document.querySelector(".show-section56")

const quest57 = document.querySelectorAll(".question57");
const photos57 = document.querySelector(".show-section57")

const quest58 = document.querySelectorAll(".question58");
const photos58 = document.querySelector(".show-section58")
const quest59 = document.querySelectorAll(".question59");
const photos59 = document.querySelector(".show-section59")
const quest60 = document.querySelectorAll(".question60");
const photos60 = document.querySelector(".show-section60")

const quest61 = document.querySelectorAll(".question61");
const photos61 = document.querySelector(".show-section61")
const quest62 = document.querySelectorAll(".question62");
const photos62 = document.querySelector(".show-section62")
const quest63 = document.querySelectorAll(".question63");
const photos63 = document.querySelector(".show-section63")
const quest64 = document.querySelectorAll(".question64");
const photos64 = document.querySelector(".show-section64")

const quest65 = document.querySelectorAll(".question65");
const photos65 = document.querySelector(".show-section65")
const quest66 = document.querySelectorAll(".question66");
const photos66 = document.querySelector(".show-section66")

const quest67 = document.querySelectorAll(".question67");
const photos67 = document.querySelector(".show-section67")
const quest68 = document.querySelectorAll(".question68");
const photos68 = document.querySelector(".show-section68")
const quest69 = document.querySelectorAll(".question69");
const photos69 = document.querySelector(".show-section69")
const quest70 = document.querySelectorAll(".question70");
const photos70 = document.querySelector(".show-section70")
const quest71 = document.querySelectorAll(".question71");
const photos71 = document.querySelector(".show-section71")
const quest72 = document.querySelectorAll(".question72");
const photos72 = document.querySelector(".show-section72")
const quest73 = document.querySelectorAll(".question73");
const photos73 = document.querySelector(".show-section73")
const quest74 = document.querySelectorAll(".question74");
const photos74 = document.querySelector(".show-section74")
const quest75 = document.querySelectorAll(".question75");
const photos75 = document.querySelector(".show-section75")

const quest76 = document.querySelectorAll(".question76");
const photos76 = document.querySelector(".show-section76")
const quest77 = document.querySelectorAll(".question77");
const photos77 = document.querySelector(".show-section77")
const quest78 = document.querySelectorAll(".question78");
const photos78 = document.querySelector(".show-section78")
const quest79 = document.querySelectorAll(".question79");
const photos79 = document.querySelector(".show-section79")
const quest80 = document.querySelectorAll(".question80");
const photos80 = document.querySelector(".show-section80")
const quest81 = document.querySelectorAll(".question81");
const photos81 = document.querySelector(".show-section81")
const quest82 = document.querySelectorAll(".question82");
const photos82 = document.querySelector(".show-section82")
const quest83 = document.querySelectorAll(".question83");
const photos83 = document.querySelector(".show-section83")
const quest84 = document.querySelectorAll(".question84");
const photos84 = document.querySelector(".show-section84")
const quest85 = document.querySelectorAll(".question85");
const photos85 = document.querySelector(".show-section85")
const quest86 = document.querySelectorAll(".question86");
const photos86 = document.querySelector(".show-section86")
const quest87 = document.querySelectorAll(".question87");
const photos87 = document.querySelector(".show-section87")
const quest88 = document.querySelectorAll(".question88");
const photos88 = document.querySelector(".show-section88")
const quest89 = document.querySelectorAll(".question89");
const photos89 = document.querySelector(".show-section89")
const quest90 = document.querySelectorAll(".question90");
const photos90 = document.querySelector(".show-section90")
const quest91 = document.querySelectorAll(".question91");
const photos91 = document.querySelector(".show-section91")
const quest92 = document.querySelectorAll(".question92");
const photos92 = document.querySelector(".show-section92")
const quest93 = document.querySelectorAll(".question93");
const photos93 = document.querySelector(".show-section93")
const quest94 = document.querySelectorAll(".question94");
const photos94 = document.querySelector(".show-section94")
const quest95 = document.querySelectorAll(".question95");
const photos95 = document.querySelector(".show-section95")
const quest96 = document.querySelectorAll(".question96");
const photos96 = document.querySelector(".show-section96")
const quest97 = document.querySelectorAll(".question97");
const photos97 = document.querySelector(".show-section97")
const quest98 = document.querySelectorAll(".question98");
const photos98 = document.querySelector(".show-section98")
const quest99 = document.querySelectorAll(".question99");
const photos99 = document.querySelector(".show-section99")
const quest100 = document.querySelectorAll(".question100");
const photos100 = document.querySelector(".show-section100")
const quest101 = document.querySelectorAll(".question101");
const photos101 = document.querySelector(".show-section101")
const quest102 = document.querySelectorAll(".question102");
const photos102 = document.querySelector(".show-section102")
const quest103 = document.querySelectorAll(".question103");
const photos103 = document.querySelector(".show-section103")
const quest104 = document.querySelectorAll(".question104");
const photos104 = document.querySelector(".show-section104")
const quest105 = document.querySelectorAll(".question105");
const photos105 = document.querySelector(".show-section105")
const quest106 = document.querySelectorAll(".question106");
const photos106 = document.querySelector(".show-section106")
const quest107 = document.querySelectorAll(".question107");
const photos107 = document.querySelector(".show-section107")
const quest108 = document.querySelectorAll(".question108");
const photos108 = document.querySelector(".show-section108")
const quest109 = document.querySelectorAll(".question109");
const photos109 = document.querySelector(".show-section109")
const quest110 = document.querySelectorAll(".question110");
const photos110 = document.querySelector(".show-section110")
const quest111 = document.querySelectorAll(".question111");
const photos111 = document.querySelector(".show-section111")
const quest112 = document.querySelectorAll(".question112");
const photos112 = document.querySelector(".show-section112")
const quest113 = document.querySelectorAll(".question113");
const photos113 = document.querySelector(".show-section113")
const quest114 = document.querySelectorAll(".question114");
const photos114 = document.querySelector(".show-section114")
const quest115 = document.querySelectorAll(".question115");
const photos115 = document.querySelector(".show-section115")
const quest116 = document.querySelectorAll(".question116");
const photos116 = document.querySelector(".show-section116")
const quest117 = document.querySelectorAll(".question117");
const photos117 = document.querySelector(".show-section117")
const quest118 = document.querySelectorAll(".question118");
const photos118 = document.querySelector(".show-section118")
const quest119 = document.querySelectorAll(".question119");
const photos119 = document.querySelector(".show-section119")
const quest120 = document.querySelectorAll(".question120");
const photos120 = document.querySelector(".show-section120")
const quest121 = document.querySelectorAll(".question121");
const photos121 = document.querySelector(".show-section121")
const quest122 = document.querySelectorAll(".question122");
const photos122 = document.querySelector(".show-section122")
const quest123 = document.querySelectorAll(".question123");
const photos123 = document.querySelector(".show-section123")
const quest124 = document.querySelectorAll(".question124");
const photos124 = document.querySelector(".show-section124")
const quest125 = document.querySelectorAll(".question125");
const photos125 = document.querySelector(".show-section125")
const quest126 = document.querySelectorAll(".question126");
const photos126 = document.querySelector(".show-section126")
const quest127 = document.querySelectorAll(".question127");
const photos127 = document.querySelector(".show-section127")
const quest128 = document.querySelectorAll(".question128");
const photos128 = document.querySelector(".show-section128")
const quest129 = document.querySelectorAll(".question129");
const photos129 = document.querySelector(".show-section129")
const quest130 = document.querySelectorAll(".question130");
const photos130 = document.querySelector(".show-section130")
const quest131 = document.querySelectorAll(".question131");
const photos131 = document.querySelector(".show-section131")
const quest132 = document.querySelectorAll(".question132");
const photos132 = document.querySelector(".show-section132")
const quest133 = document.querySelectorAll(".question133");
const photos133 = document.querySelector(".show-section133")
const quest134 = document.querySelectorAll(".question134");
const photos134 = document.querySelector(".show-section134")
const quest135 = document.querySelectorAll(".question135");
const photos135 = document.querySelector(".show-section135")
const quest136 = document.querySelectorAll(".question136");
const photos136 = document.querySelector(".show-section136")
const quest137 = document.querySelectorAll(".question137");
const photos137 = document.querySelector(".show-section137")
const quest138 = document.querySelectorAll(".question138");
const photos138 = document.querySelector(".show-section138")
const quest139 = document.querySelectorAll(".question139");
const photos139 = document.querySelector(".show-section139")
const quest140 = document.querySelectorAll(".question140");
const photos140 = document.querySelector(".show-section140")
const quest141 = document.querySelectorAll(".question141");
const photos141 = document.querySelector(".show-section141")
const quest142 = document.querySelectorAll(".question142");
const photos142 = document.querySelector(".show-section142")
const quest143 = document.querySelectorAll(".question143");
const photos143 = document.querySelector(".show-section143")
const quest144 = document.querySelectorAll(".question144");
const photos144 = document.querySelector(".show-section144")
const quest145 = document.querySelectorAll(".question145");
const photos145 = document.querySelector(".show-section145")
const quest146 = document.querySelectorAll(".question146");
const photos146 = document.querySelector(".show-section146")
const quest147 = document.querySelectorAll(".question147");
const photos147 = document.querySelector(".show-section147")
const quest148 = document.querySelectorAll(".question148");
const photos148 = document.querySelector(".show-section148")
const quest149 = document.querySelectorAll(".question149");
const photos149 = document.querySelector(".show-section149")
const quest150 = document.querySelectorAll(".question150");
const photos150 = document.querySelector(".show-section150")
const quest151 = document.querySelectorAll(".question151");
const photos151 = document.querySelector(".show-section151")
const quest152 = document.querySelectorAll(".question152");
const photos152 = document.querySelector(".show-section152")
const quest153 = document.querySelectorAll(".question153");
const photos153 = document.querySelector(".show-section153")
const quest154 = document.querySelectorAll(".question154");
const photos154 = document.querySelector(".show-section154")
const quest155 = document.querySelectorAll(".question155");
const photos155 = document.querySelector(".show-section155")
const quest156 = document.querySelectorAll(".question156");
const photos156 = document.querySelector(".show-section156")
const quest157 = document.querySelectorAll(".question157");
const photos157 = document.querySelector(".show-section157")
const quest158 = document.querySelectorAll(".question158");
const photos158 = document.querySelector(".show-section158")
const quest159 = document.querySelectorAll(".question159");
const photos159 = document.querySelector(".show-section159")
const quest160 = document.querySelectorAll(".question160");
const photos160 = document.querySelector(".show-section160")
const quest161 = document.querySelectorAll(".question161");
const photos161 = document.querySelector(".show-section161")
const quest162 = document.querySelectorAll(".question162");
const photos162 = document.querySelector(".show-section162")
const quest163 = document.querySelectorAll(".question163");
const photos163 = document.querySelector(".show-section163")
const quest164 = document.querySelectorAll(".question164");
const photos164 = document.querySelector(".show-section164")
const quest165 = document.querySelectorAll(".question165");
const photos165 = document.querySelector(".show-section165")
const quest166 = document.querySelectorAll(".question166");
const photos166 = document.querySelector(".show-section166")
const quest167 = document.querySelectorAll(".question167");
const photos167 = document.querySelector(".show-section167")
const quest168 = document.querySelectorAll(".question168");
const photos168 = document.querySelector(".show-section168")
const quest169 = document.querySelectorAll(".question169");
const photos169 = document.querySelector(".show-section169")
const quest170 = document.querySelectorAll(".question170");
const photos170 = document.querySelector(".show-section170")
const quest171 = document.querySelectorAll(".question171");
const photos171 = document.querySelector(".show-section171")
const quest172 = document.querySelectorAll(".question172");
const photos172 = document.querySelector(".show-section172")
const quest173 = document.querySelectorAll(".question173");
const photos173 = document.querySelector(".show-section173")
const quest174 = document.querySelectorAll(".question174");
const photos174 = document.querySelector(".show-section174")
const quest175 = document.querySelectorAll(".question175");
const photos175 = document.querySelector(".show-section175")
const quest176 = document.querySelectorAll(".question176");
const photos176 = document.querySelector(".show-section176")
const quest177 = document.querySelectorAll(".question177");
const photos177 = document.querySelector(".show-section177")
const quest178 = document.querySelectorAll(".question178");
const photos178 = document.querySelector(".show-section178")
const quest179 = document.querySelectorAll(".question179");
const photos179 = document.querySelector(".show-section179")
const quest180 = document.querySelectorAll(".question180");
const photos180 = document.querySelector(".show-section180")
const quest181 = document.querySelectorAll(".question181");
const photos181 = document.querySelector(".show-section181")
const quest182 = document.querySelectorAll(".question182");
const photos182 = document.querySelector(".show-section182")
const quest183 = document.querySelectorAll(".question183");
const photos183 = document.querySelector(".show-section183")
const quest184 = document.querySelectorAll(".question184");
const photos184 = document.querySelector(".show-section184")
const quest185 = document.querySelectorAll(".question185");
const photos185 = document.querySelector(".show-section185")
const quest186 = document.querySelectorAll(".question186");
const photos186 = document.querySelector(".show-section186")
const quest187 = document.querySelectorAll(".question187");
const photos187 = document.querySelector(".show-section187")
const quest188 = document.querySelectorAll(".question188");
const photos188 = document.querySelector(".show-section188")

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
quest44.forEach((q44) => {
  q44.addEventListener("click", () =>{
      q44.classList.toggle("active");
      photos44.classList.toggle("show");
  })
})
quest45.forEach((q45) => {
  q45.addEventListener("click", () =>{
      q45.classList.toggle("active");
      photos45.classList.toggle("show");
  })
})
quest46.forEach((q46) => {
  q46.addEventListener("click", () =>{
      q46.classList.toggle("active");
      photos46.classList.toggle("show");
  })
})
quest47.forEach((q47) => {
  q47.addEventListener("click", () =>{
      q47.classList.toggle("active");
      photos47.classList.toggle("show");
  })
})
quest48.forEach((q48) => {
  q48.addEventListener("click", () =>{
      q48.classList.toggle("active");
      photos48.classList.toggle("show");
  })
})
quest49.forEach((q49) => {
  q49.addEventListener("click", () =>{
      q49.classList.toggle("active");
      photos49.classList.toggle("show");
  })
})
quest50.forEach((q50) => {
  q50.addEventListener("click", () =>{
      q50.classList.toggle("active");
      photos50.classList.toggle("show");
  })
})
quest51.forEach((q51) => {
  q51.addEventListener("click", () =>{
      q51.classList.toggle("active");
      photos51.classList.toggle("show");
  })
})
quest52.forEach((q52) => {
  q52.addEventListener("click", () =>{
      q52.classList.toggle("active");
      photos52.classList.toggle("show");
  })
})
quest53.forEach((q53) => {
  q53.addEventListener("click", () =>{
      q53.classList.toggle("active");
      photos53.classList.toggle("show");
  })
})
quest54.forEach((q54) => {
  q54.addEventListener("click", () =>{
      q54.classList.toggle("active");
      photos54.classList.toggle("show");
  })
})
quest55.forEach((q55) => {
  q55.addEventListener("click", () =>{
      q55.classList.toggle("active");
      photos55.classList.toggle("show");
  })
})
quest56.forEach((q56) => {
  q56.addEventListener("click", () =>{
      q56.classList.toggle("active");
      photos56.classList.toggle("show");
  })
})
quest57.forEach((q57) => {
  q57.addEventListener("click", () =>{
      q57.classList.toggle("active");
      photos57.classList.toggle("show");
  })
})
quest58.forEach((q58) => {
  q58.addEventListener("click", () =>{
      q58.classList.toggle("active");
      photos58.classList.toggle("show");
  })
})
quest59.forEach((q59) => {
  q59.addEventListener("click", () =>{
      q59.classList.toggle("active");
      photos59.classList.toggle("show");
  })
})
quest60.forEach((q60) => {
  q60.addEventListener("click", () =>{
      q60.classList.toggle("active");
      photos60.classList.toggle("show");
  })
})
quest61.forEach((q61) => {
  q61.addEventListener("click", () =>{
      q61.classList.toggle("active");
      photos61.classList.toggle("show");
  })
})
quest62.forEach((q62) => {
  q62.addEventListener("click", () =>{
      q62.classList.toggle("active");
      photos62.classList.toggle("show");
  })
})
quest63.forEach((q63) => {
  q63.addEventListener("click", () =>{
      q63.classList.toggle("active");
      photos63.classList.toggle("show");
  })
})
quest64.forEach((q64) => {
  q64.addEventListener("click", () =>{
      q64.classList.toggle("active");
      photos64.classList.toggle("show");
  })
})
quest65.forEach((q65) => {
  q65.addEventListener("click", () =>{
      q65.classList.toggle("active");
      photos65.classList.toggle("show");
  })
})
quest66.forEach((q66) => {
  q66.addEventListener("click", () =>{
      q66.classList.toggle("active");
      photos66.classList.toggle("show");
  })
})
quest67.forEach((q67) => {
  q67.addEventListener("click", () =>{
      q67.classList.toggle("active");
      photos67.classList.toggle("show");
  })
})
quest68.forEach((q68) => {
  q68.addEventListener("click", () =>{
      q68.classList.toggle("active");
      photos68.classList.toggle("show");
  })
})
quest69.forEach((q69) => {
  q69.addEventListener("click", () =>{
      q69.classList.toggle("active");
      photos69.classList.toggle("show");
  })
})
quest70.forEach((q70) => {
  q70.addEventListener("click", () =>{
      q70.classList.toggle("active");
      photos70.classList.toggle("show");
  })
})
quest71.forEach((q71) => {
  q71.addEventListener("click", () =>{
      q71.classList.toggle("active");
      photos71.classList.toggle("show");
  })
})
quest72.forEach((q72) => {
  q72.addEventListener("click", () =>{
      q72.classList.toggle("active");
      photos72.classList.toggle("show");
  })
})
quest73.forEach((q73) => {
  q73.addEventListener("click", () =>{
      q73.classList.toggle("active");
      photos73.classList.toggle("show");
  })
})
quest74.forEach((q74) => {
  q74.addEventListener("click", () =>{
      q74.classList.toggle("active");
      photos74.classList.toggle("show");
  })
})
quest75.forEach((q75) => {
  q75.addEventListener("click", () =>{
      q75.classList.toggle("active");
      photos75.classList.toggle("show");
  })
})
quest76.forEach((q76) => {
  q76.addEventListener("click", () =>{
      q76.classList.toggle("active");
      photos76.classList.toggle("show");
  })
})
quest77.forEach((q77) => {
  q77.addEventListener("click", () =>{
      q77.classList.toggle("active");
      photos77.classList.toggle("show");
  })
})
quest78.forEach((q78) => {
  q78.addEventListener("click", () =>{
      q78.classList.toggle("active");
      photos78.classList.toggle("show");
  })
})
quest79.forEach((q79) => {
  q79.addEventListener("click", () =>{
      q79.classList.toggle("active");
      photos79.classList.toggle("show");
  })
})
quest80.forEach((q80) => {
  q80.addEventListener("click", () =>{
      q80.classList.toggle("active");
      photos80.classList.toggle("show");
  })
})
quest81.forEach((q81) => {
  q81.addEventListener("click", () =>{
      q81.classList.toggle("active");
      photos81.classList.toggle("show");
  })
})
quest82.forEach((q82) => {
  q82.addEventListener("click", () =>{
      q82.classList.toggle("active");
      photos82.classList.toggle("show");
  })
})
quest83.forEach((q83) => {
  q83.addEventListener("click", () =>{
      q83.classList.toggle("active");
      photos83.classList.toggle("show")
  })
})
quest84.forEach((q84) => {
  q84.addEventListener("click", () =>{
      q84.classList.toggle("active");
      photos84.classList.toggle("show")
  })
})
quest85.forEach((q85) => {
  q85.addEventListener("click", () =>{
      q85.classList.toggle("active");
      photos85.classList.toggle("show")
  })
})
quest86.forEach((q86) => {
  q86.addEventListener("click", () =>{
      q86.classList.toggle("active");
      photos86.classList.toggle("show")
  })
})
quest87.forEach((q87) => {
  q87.addEventListener("click", () =>{
      q87.classList.toggle("active");
      photos87.classList.toggle("show")
  })
})
quest88.forEach((q88) => {
  q88.addEventListener("click", () =>{
      q88.classList.toggle("active");
      photos88.classList.toggle("show")
  })
})
quest89.forEach((q89) => {
  q89.addEventListener("click", () =>{
      q89.classList.toggle("active");
      photos89.classList.toggle("show")
  })
})
quest90.forEach((q90) => {
  q90.addEventListener("click", () =>{
      q90.classList.toggle("active");
      photos90.classList.toggle("show")
  })
})
quest91.forEach((q91) => {
  q91.addEventListener("click", () =>{
      q91.classList.toggle("active");
      photos91.classList.toggle("show")
  })
})
quest92.forEach((q92) => {
  q92.addEventListener("click", () =>{
      q92.classList.toggle("active");
      photos92.classList.toggle("show")
  })
})
quest93.forEach((q93) => {
  q93.addEventListener("click", () =>{
      q93.classList.toggle("active");
      photos93.classList.toggle("show")
  })
})
quest94.forEach((q94) => {
  q94.addEventListener("click", () =>{
      q94.classList.toggle("active");
      photos94.classList.toggle("show")
  })
})
quest95.forEach((q95) => {
  q95.addEventListener("click", () =>{
      q95.classList.toggle("active");
      photos95.classList.toggle("show")
  })
})
quest96.forEach((q96) => {
  q96.addEventListener("click", () =>{
      q96.classList.toggle("active");
      photos96.classList.toggle("show")
  })
})
quest97.forEach((q97) => {
  q97.addEventListener("click", () =>{
      q97.classList.toggle("active");
      photos97.classList.toggle("show")
  })
})
quest98.forEach((q98) => {
  q98.addEventListener("click", () =>{
      q98.classList.toggle("active");
      photos98.classList.toggle("show")
  })
})
quest99.forEach((q99) => {
  q99.addEventListener("click", () =>{
      q99.classList.toggle("active");
      photos99.classList.toggle("show")
  })
})
quest100.forEach((q100) => {
  q100.addEventListener("click", () =>{
      q100.classList.toggle("active");
      photos100.classList.toggle("show")
  })
})
quest101.forEach((q101) => {
  q101.addEventListener("click", () =>{
      q101.classList.toggle("active");
      photos101.classList.toggle("show")
  })
})
quest102.forEach((q102) => {
  q102.addEventListener("click", () =>{
      q102.classList.toggle("active");
      photos102.classList.toggle("show")
  })
})
quest103.forEach((q103) => {
  q103.addEventListener("click", () =>{
      q103.classList.toggle("active");
      photos103.classList.toggle("show")
  })
})
quest104.forEach((q104) => {
  q104.addEventListener("click", () =>{
      q104.classList.toggle("active");
      photos104.classList.toggle("show")
  })
})
quest105.forEach((q105) => {
  q105.addEventListener("click", () =>{
      q105.classList.toggle("active");
      photos105.classList.toggle("show")
  })
})
quest106.forEach((q106) => {
  q106.addEventListener("click", () =>{
      q106.classList.toggle("active");
      photos106.classList.toggle("show")
  })
})
quest107.forEach((q107) => {
  q107.addEventListener("click", () =>{
      q107.classList.toggle("active");
      photos107.classList.toggle("show")
  })
})
quest108.forEach((q108) => {
  q108.addEventListener("click", () =>{
      q108.classList.toggle("active");
      photos108.classList.toggle("show")
  })
})
quest109.forEach((q109) => {
  q109.addEventListener("click", () =>{
      q109.classList.toggle("active");
      photos109.classList.toggle("show")
  })
})
quest110.forEach((q110) => {
  q110.addEventListener("click", () =>{
      q110.classList.toggle("active");
      photos110.classList.toggle("show")
  })
})
quest111.forEach((q111) => {
  q111.addEventListener("click", () =>{
      q111.classList.toggle("active");
      photos111.classList.toggle("show")
  })
})
quest112.forEach((q112) => {
  q112.addEventListener("click", () =>{
      q112.classList.toggle("active");
      photos112.classList.toggle("show")
  })
})
quest113.forEach((q113) => {
  q113.addEventListener("click", () =>{
      q113.classList.toggle("active");
      photos113.classList.toggle("show")
  })
})
quest114.forEach((q114) => {
  q114.addEventListener("click", () =>{
      q114.classList.toggle("active");
      photos114.classList.toggle("show")
  })
})
quest115.forEach((q115) => {
  q115.addEventListener("click", () =>{
      q115.classList.toggle("active");
      photos115.classList.toggle("show")
  })
})
quest116.forEach((q116) => {
  q116.addEventListener("click", () =>{
      q116.classList.toggle("active");
      photos116.classList.toggle("show")
  })
})
quest117.forEach((q117) => {
  q117.addEventListener("click", () =>{
      q117.classList.toggle("active");
      photos117.classList.toggle("show")
  })
})
quest118.forEach((q118) => {
  q118.addEventListener("click", () =>{
      q118.classList.toggle("active");
      photos118.classList.toggle("show")
  })
})
quest119.forEach((q119) => {
  q119.addEventListener("click", () =>{
      q119.classList.toggle("active");
      photos119.classList.toggle("show")
  })
})
quest120.forEach((q120) => {
  q120.addEventListener("click", () =>{
      q120.classList.toggle("active");
      photos120.classList.toggle("show")
  })
})
quest121.forEach((q121) => {
  q121.addEventListener("click", () =>{
      q121.classList.toggle("active");
      photos121.classList.toggle("show")
  })
})
quest122.forEach((q122) => {
  q122.addEventListener("click", () =>{
      q122.classList.toggle("active");
      photos122.classList.toggle("show")
  })
})
quest123.forEach((q123) => {
  q123.addEventListener("click", () =>{
      q123.classList.toggle("active");
      photos123.classList.toggle("show")
  })
})
quest124.forEach((q124) => {
  q124.addEventListener("click", () =>{
      q124.classList.toggle("active");
      photos124.classList.toggle("show")
  })
})
quest125.forEach((q125) => {
  q125.addEventListener("click", () =>{
      q125.classList.toggle("active");
      photos125.classList.toggle("show")
  })
})
quest126.forEach((q126) => {
  q126.addEventListener("click", () =>{
      q126.classList.toggle("active");
      photos126.classList.toggle("show")
  })
})
quest127.forEach((q127) => {
  q127.addEventListener("click", () =>{
      q127.classList.toggle("active");
      photos127.classList.toggle("show")
  })
})
quest128.forEach((q128) => {
  q128.addEventListener("click", () =>{
      q128.classList.toggle("active");
      photos128.classList.toggle("show")
  })
})
quest129.forEach((q129) => {
  q129.addEventListener("click", () =>{
      q129.classList.toggle("active");
      photos129.classList.toggle("show")
  })
})
quest130.forEach((q130) => {
  q130.addEventListener("click", () =>{
      q130.classList.toggle("active");
      photos130.classList.toggle("show")
  })
})
quest131.forEach((q131) => {
  q131.addEventListener("click", () =>{
      q131.classList.toggle("active");
      photos131.classList.toggle("show")
  })
})
quest132.forEach((q132) => {
  q132.addEventListener("click", () =>{
      q132.classList.toggle("active");
      photos132.classList.toggle("show")
  })
})
quest133.forEach((q133) => {
  q133.addEventListener("click", () =>{
      q133.classList.toggle("active");
      photos133.classList.toggle("show")
  })
})
quest134.forEach((q134) => {
  q134.addEventListener("click", () =>{
      q134.classList.toggle("active");
      photos134.classList.toggle("show")
  })
})
quest135.forEach((q135) => {
  q135.addEventListener("click", () =>{
      q135.classList.toggle("active");
      photos135.classList.toggle("show")
  })
})
quest136.forEach((q136) => {
  q136.addEventListener("click", () =>{
      q136.classList.toggle("active");
      photos136.classList.toggle("show")
  })
})
quest137.forEach((q137) => {
  q137.addEventListener("click", () =>{
      q137.classList.toggle("active");
      photos137.classList.toggle("show")
  })
})
quest138.forEach((q138) => {
  q138.addEventListener("click", () =>{
      q138.classList.toggle("active");
      photos138.classList.toggle("show")
  })
})
quest139.forEach((q139) => {
  q139.addEventListener("click", () =>{
      q139.classList.toggle("active");
      photos139.classList.toggle("show")
  })
})
quest140.forEach((q140) => {
  q140.addEventListener("click", () =>{
      q140.classList.toggle("active");
      photos140.classList.toggle("show")
  })
})
quest141.forEach((q141) => {
  q141.addEventListener("click", () =>{
      q141.classList.toggle("active");
      photos141.classList.toggle("show")
  })
})
quest142.forEach((q142) => {
  q142.addEventListener("click", () =>{
      q142.classList.toggle("active");
      photos142.classList.toggle("show")
  })
})
quest143.forEach((q143) => {
  q143.addEventListener("click", () =>{
      q143.classList.toggle("active");
      photos143.classList.toggle("show")
  })
})
quest144.forEach((q144) => {
  q144.addEventListener("click", () =>{
      q144.classList.toggle("active");
      photos144.classList.toggle("show")
  })
})
quest145.forEach((q145) => {
  q145.addEventListener("click", () =>{
      q145.classList.toggle("active");
      photos145.classList.toggle("show")
  })
})
quest146.forEach((q146) => {
  q146.addEventListener("click", () =>{
      q146.classList.toggle("active");
      photos146.classList.toggle("show")
  })
})
quest147.forEach((q147) => {
  q147.addEventListener("click", () =>{
      q147.classList.toggle("active");
      photos147.classList.toggle("show")
  })
})
quest148.forEach((q148) => {
  q148.addEventListener("click", () =>{
      q148.classList.toggle("active");
      photos148.classList.toggle("show")
  })
})
quest149.forEach((q149) => {
  q149.addEventListener("click", () =>{
      q149.classList.toggle("active");
      photos149.classList.toggle("show")
  })
})
quest150.forEach((q150) => {
  q150.addEventListener("click", () =>{
      q150.classList.toggle("active");
      photos150.classList.toggle("show")
  })
})
quest151.forEach((q151) => {
  q151.addEventListener("click", () =>{
      q151.classList.toggle("active");
      photos151.classList.toggle("show")
  })
})
quest152.forEach((q152) => {
  q152.addEventListener("click", () =>{
      q152.classList.toggle("active");
      photos152.classList.toggle("show")
  })
})
quest153.forEach((q153) => {
  q153.addEventListener("click", () =>{
      q153.classList.toggle("active");
      photos153.classList.toggle("show")
  })
})
quest154.forEach((q154) => {
  q154.addEventListener("click", () =>{
      q154.classList.toggle("active");
      photos154.classList.toggle("show")
  })
})
quest155.forEach((q155) => {
  q155.addEventListener("click", () =>{
      q155.classList.toggle("active");
      photos155.classList.toggle("show")
  })
})
quest156.forEach((q156) => {
  q156.addEventListener("click", () =>{
      q156.classList.toggle("active");
      photos156.classList.toggle("show")
  })
})
quest157.forEach((q157) => {
  q157.addEventListener("click", () =>{
      q157.classList.toggle("active");
      photos157.classList.toggle("show")
  })
})
quest158.forEach((q158) => {
  q158.addEventListener("click", () =>{
      q158.classList.toggle("active");
      photos158.classList.toggle("show")
  })
})
quest159.forEach((q159) => {
  q159.addEventListener("click", () =>{
      q159.classList.toggle("active");
      photos159.classList.toggle("show")
  })
})
quest160.forEach((q160) => {
  q160.addEventListener("click", () =>{
      q160.classList.toggle("active");
      photos160.classList.toggle("show")
  })
})
quest161.forEach((q161) => {
  q161.addEventListener("click", () =>{
      q161.classList.toggle("active");
      photos161.classList.toggle("show")
  })
})
quest162.forEach((q162) => {
  q162.addEventListener("click", () =>{
      q162.classList.toggle("active");
      photos162.classList.toggle("show")
  })
})
quest163.forEach((q163) => {
  q163.addEventListener("click", () =>{
      q163.classList.toggle("active");
      photos163.classList.toggle("show")
  })
})
quest164.forEach((q164) => {
  q164.addEventListener("click", () =>{
      q164.classList.toggle("active");
      photos164.classList.toggle("show")
  })
})
quest165.forEach((q165) => {
  q165.addEventListener("click", () =>{
      q165.classList.toggle("active");
      photos165.classList.toggle("show")
  })
})
quest166.forEach((q166) => {
  q166.addEventListener("click", () =>{
      q166.classList.toggle("active");
      photos166.classList.toggle("show")
  })
})
quest167.forEach((q167) => {
  q167.addEventListener("click", () =>{
      q167.classList.toggle("active");
      photos167.classList.toggle("show")
  })
})
quest168.forEach((q168) => {
  q168.addEventListener("click", () =>{
      q168.classList.toggle("active");
      photos168.classList.toggle("show")
  })
})
quest169.forEach((q169) => {
  q169.addEventListener("click", () =>{
      q169.classList.toggle("active");
      photos169.classList.toggle("show")
  })
})
quest170.forEach((q170) => {
  q170.addEventListener("click", () =>{
      q170.classList.toggle("active");
      photos170.classList.toggle("show")
  })
})
quest171.forEach((q171) => {
  q171.addEventListener("click", () =>{
      q171.classList.toggle("active");
      photos171.classList.toggle("show")
  })
})
quest172.forEach((q172) => {
  q172.addEventListener("click", () =>{
      q172.classList.toggle("active");
      photos172.classList.toggle("show")
  })
})
quest173.forEach((q173) => {
  q173.addEventListener("click", () =>{
      q173.classList.toggle("active");
      photos173.classList.toggle("show")
  })
})
quest174.forEach((q174) => {
  q174.addEventListener("click", () =>{
      q174.classList.toggle("active");
      photos174.classList.toggle("show")
  })
})
quest175.forEach((q175) => {
  q175.addEventListener("click", () =>{
      q175.classList.toggle("active");
      photos175.classList.toggle("show")
  })
})
quest176.forEach((q176) => {
  q176.addEventListener("click", () =>{
      q176.classList.toggle("active");
      photos176.classList.toggle("show")
  })
})
quest177.forEach((q177) => {
  q177.addEventListener("click", () =>{
      q177.classList.toggle("active");
      photos177.classList.toggle("show")
  })
})
quest178.forEach((q178) => {
  q178.addEventListener("click", () =>{
      q178.classList.toggle("active");
      photos178.classList.toggle("show")
  })
})
quest179.forEach((q179) => {
  q179.addEventListener("click", () =>{
      q179.classList.toggle("active");
      photos179.classList.toggle("show")
  })
})
quest180.forEach((q180) => {
  q180.addEventListener("click", () =>{
      q180.classList.toggle("active");
      photos180.classList.toggle("show")
  })
})
quest181.forEach((q181) => {
  q181.addEventListener("click", () =>{
      q181.classList.toggle("active");
      photos181.classList.toggle("show")
  })
})
quest182.forEach((q182) => {
  q182.addEventListener("click", () =>{
      q182.classList.toggle("active");
      photos182.classList.toggle("show")
  })
})
quest183.forEach((q183) => {
  q183.addEventListener("click", () =>{
      q183.classList.toggle("active");
      photos183.classList.toggle("show")
  })
})
quest184.forEach((q184) => {
  q184.addEventListener("click", () =>{
      q184.classList.toggle("active");
      photos184.classList.toggle("show")
  })
})
quest185.forEach((q185) => {
  q185.addEventListener("click", () =>{
      q185.classList.toggle("active");
      photos185.classList.toggle("show")
  })
})
quest186.forEach((q186) => {
  q186.addEventListener("click", () =>{
      q186.classList.toggle("active");
      photos186.classList.toggle("show")
  })
})
quest187.forEach((q187) => {
  q187.addEventListener("click", () =>{
      q187.classList.toggle("active");
      photos187.classList.toggle("show")
  })
})
quest188.forEach((q188) => {
  q188.addEventListener("click", () =>{
      q188.classList.toggle("active");
      photos188.classList.toggle("show")
  })
})