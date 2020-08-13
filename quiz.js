const whichItem = () => {
    let number = 0;
    document.querySelectorAll('.quiz-button-container').forEach(item => {
        item.dataset.whichitem = number++
        item.dataset.selectedvalue = 0;
    })
    document.querySelectorAll('.quiz-button').forEach(item => {
        item.dataset.whichitem = item.parentNode.dataset.whichitem;
    })
}
whichItem();

const choiceButton = () => {
    event.target.parentNode.dataset.selectedvalue = event.target.textContent[event.target.textContent.length-1];
    document.querySelectorAll(`[data-whichitem='${event.target.dataset.whichitem}']`).forEach(item => {
        item.classList.remove("quiz-button-active");
    })
    event.target.classList.add("quiz-button-active");
}
document.querySelectorAll('.quiz-button').forEach(item => item.addEventListener('click', choiceButton));

const calculation = () => {
    let numberReactive = 0;
    let numberManipulated = 0;
    let numberAggressive = 0;
    let numberAssertive = 0;
    document.querySelectorAll(`[data-bierny]`).forEach(item => {
        document.querySelector('.result-bierny').textContent = numberReactive += Number(item.dataset.selectedvalue);
    })
    document.querySelectorAll(`[data-manipulujacy]`).forEach(item => {
        document.querySelector('.result-manipulujacy').textContent = numberManipulated += Number(item.dataset.selectedvalue);
    })
    document.querySelectorAll(`[data-agresywny]`).forEach(item => {
        document.querySelector('.result-agresywny').textContent = numberAggressive += Number(item.dataset.selectedvalue);
    })
    document.querySelectorAll(`[data-asertywny]`).forEach(item => {
        document.querySelector('.result-asertywny').textContent = numberAssertive += Number(item.dataset.selectedvalue);
    })
    if (document.querySelectorAll(`[data-selectedvalue="0"]`).length >= 1) {
        document.querySelector('.empty-result').textContent = "Nie wybrano " + document.querySelectorAll(`[data-selectedvalue="0"]`).length + " pozycji";
    }
    else {
        document.querySelector('.empty-result').textContent = "";
    }
    prevailingAttitude(numberReactive, numberManipulated, numberAggressive, numberAssertive)
}
document.querySelector('.showResult').addEventListener('click', calculation);

const prevailingAttitude = (reactive, manipulated, aggressive, assertive) => {
    let results = [];

    document.querySelectorAll('.the-final-result').forEach(item => {
        results.push(item.textContent);
    })
    console.log(results.sort(function(a, b){return a-b}))

    if (Math.max(reactive, manipulated, aggressive, assertive) >= 1) {
        if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-bierny').textContent) {
            const attitude = "Bierność"
            const features = `<br>• brak pewności siebie i niska samoocena <br> • brak szacunku do samego siebie<br> • poniżanie samego siebie<br>• negatywne uczucia i myśli na temat własnej osoby`
            valueSupplementation(attitude, features)
        }
    
        if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-manipulujacy').textContent) {
            const attitude = "manipulujący"
            const features = `<br>• brak pewności siebie i niska samoocena<br>• brak szacunku do siebie oraz innych ludzi<br>• podejrzliwość i niedowierzanie w stosunku do motywów działań otoczenia<br>• negatywne myśli i uczucia na temat innych osób oraz własnego „ja”<br>• duża ostrożność w stosunku do innych<br>• nieuczciwość i brak szczerości<br>• zniekształcanie znaczeń cudzych wypowiedzi<br>• podawanie w wątpliwość poczucia godności innych ludzi<br>• depresja i brak motywacji`
            valueSupplementation(attitude, features)
        }
    
        if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-agresywny').textContent) {
            const attitude = "agresywny"
            const features = `<br>• brak pewności siebie i niska samoocena<br>• brak szacunku dla innych<br>• lekceważenie innych<br>• poczucie wyższości<br>• chęć kontrolowania otoczenia i sytuacji<br>• brak zainteresowania cudzymi uczuciami i myślami<br>
            • złość w stosunku do innych ludzi i skłonność do obwiniania ich<br>• nieumiejętność słuchania pytań i zadawania ich<br>• ignorowanie reakcji otoczenia`
            valueSupplementation(attitude, features)
        }
    
        if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-asertywny').textContent) {
            const attitude = "asertywność";
            const features = `<br>• pewność siebie i wysoka samoocena<br>• szacunek dla samego siebie oraz innych<br>• odpowiedzialność za siebie<br>• motywacja do dobrej pracy<br>• zainteresowanie uczuciami oraz myślami innych ludzi<br>• umiejętność zadawania pytań<br>• uczciwość i bezpośredniość<br>• umiejętność słuchania innych <br>• potrzeba poznania reakcji otoczenia`
            valueSupplementation(attitude, features)
        }
    }
    else {
        document.querySelector('.features').textContent = "Musisz najpierw uzupełnić kwestionariusz"
    }
}

const valueSupplementation = (attitudeValue, featuresValue) => {
    let attitude = "Twoja przeważająca postawa to ";
    let features = `<p class=underthetitle>Wówczas można Ci przypisać pewne z poniższych cech</p>`;

    document.querySelector('.prevailing-attitude-result').textContent = attitude + attitudeValue;
    document.querySelector('.features').innerHTML = features + featuresValue;
}




