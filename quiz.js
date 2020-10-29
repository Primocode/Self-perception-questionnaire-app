const resultsValue = {
    bierny: 0,
    manipulujacy: 0,
    agresywny: 0,
    asertywny: 0,
    sortingTheResults: [],
    nameOfAttitudes: ["bierny", "manipulujacy", "agresywny", "asertywny"],
}

const returnOrder = {
    order: [],
    attitude: [],
    amountOfPoints: [],
}

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

const choiceButton = (e) => {
    e.target.parentNode.dataset.selectedvalue = e.target.textContent[e.target.textContent.length-1];
    document.querySelectorAll(`[data-whichitem='${e.target.dataset.whichitem}']`).forEach(item => {
        item.classList.remove("quiz-button-active");
    })
    e.target.classList.add("quiz-button-active");
}
document.querySelectorAll('.quiz-button').forEach(item => item.addEventListener('click', choiceButton));

const addingPoints = () => {
    resultsValue.bierny = 0;
    resultsValue.manipulujacy = 0;
    resultsValue.agresywny = 0;
    resultsValue.asertywny = 0;
    resultsValue.sortingTheResults = [];
    returnOrder.order = [];
    returnOrder.attitude = [];
    returnOrder.amountOfPoints = [];

    resultsValue.nameOfAttitudes.forEach(item => {
        document.querySelectorAll(`[data-${item}]`).forEach(element => {
            resultsValue[item] = resultsValue[item] += Number(element.dataset.selectedvalue);
        })
    })
    resultsValue.sortingTheResults.push(resultsValue.bierny, resultsValue.manipulujacy, resultsValue.agresywny, resultsValue.asertywny);
    resultsValue.sortingTheResults = [...new Set(resultsValue.sortingTheResults)]
    resultsValue.sortingTheResults.sort((a, b) => {return a - b});
}

const calculation = () => {
    if (document.querySelectorAll(`[data-selectedvalue="0"]`).length >= 1) {
        document.querySelector('.empty-result').textContent = "Nie wybrano " + document.querySelectorAll(`[data-selectedvalue="0"]`).length + " pozycji";
    }
    else {
        document.querySelector('.empty-result').textContent = "";
    }
    addingPoints();
    displayingValues();
    displayingInformation();
}
document.querySelector('.showResult').addEventListener('click', calculation);

const displayingValues = () => {
    resultsValue.sortingTheResults.forEach(item => {
        resultsValue.nameOfAttitudes.forEach(element => {
            if (resultsValue[element] == item) {
                console.log(element + " " + resultsValue.sortingTheResults.indexOf(item));
                returnOrder.order.push(resultsValue.sortingTheResults.indexOf(item))
                returnOrder.attitude.push(element);
            }
        })

    })
    returnOrder.attitude.forEach(item => {
        console.log(resultsValue[item])
        returnOrder.amountOfPoints.push(resultsValue[item])
    })

    resultsValue.nameOfAttitudes.forEach(item => {
        document.querySelector(`.result-${item}`).textContent = resultsValue[item];
    })
}

const displayingInformation = () => {
    document.querySelector('.interpretation-of-the-result-title').textContent = "Jak interpretować wynik?";
    document.querySelector('.interpretation-of-the-result-text').textContent = "Aplikacja podliczyła punkty dla wszystkich postaw oraz wyświetliła wynik. Pamiętaj im większy procent uzyskanych punktów tym ta postawa jest Ci bliższa. Wyniki mogą być do siebie podobne, jeżeli tak będzie przeczytaj te postawy i określ wówczas które postawy odnoszą się bardziej do Ciebie. Zwróć szczegółną uwagę na różnicę procentowe.";
}