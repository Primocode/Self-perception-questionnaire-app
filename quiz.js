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

    let attitude = "Twoja przeważająca postawa to ";
    let features = "Wówczas można Ci przypisać pewne z poniższych cech ";
    // `${reactive} ${manipulated} ${aggressive} ${assertive}`;

    // document.querySelector('.prevailing-attitude-result').textContent = Math.max(reactive, manipulated, aggressive, assertive);

    if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-bierny').textContent) {
        document.querySelector('.prevailing-attitude-result').textContent = attitude + "bierny"
        document.querySelector('.features').textContent = features + `brak pewności siebie i niska samoocena<br> •brak szacunku do samego siebie<br> poniżanie samego siebie<br>negatywne uczucia i myśli na temat własnej osoby`
    }

    if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-manipulujacy').textContent) {
        document.querySelector('.prevailing-attitude-result').textContent = attitude + "manipulujący"
    }

    if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-agresywny').textContent) {
        document.querySelector('.prevailing-attitude-result').textContent = attitude + "agresywny"
    }

    if (Math.max(reactive, manipulated, aggressive, assertive) == document.querySelector('.result-asertywny').textContent) {
        document.querySelector('.prevailing-attitude-result').textContent = attitude + "asertywny"
    }
}