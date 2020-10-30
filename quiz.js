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

const informationToDisplay = {
    postureDetails: {
        asertywny: "Zachowanie asertywne oznacza bezpośrednie, uczciwe i stanowcze wyrażanie wobec innej osoby swoich uczuć, postaw, opinii lub pragnień w sposób respektujący uczucia, postawy, opinie, prawa i pragnienia tej drugiej osoby.  Zachowanie asertywne różni się od agresywnego i uległego. Oznacza bowiem korzystanie ze swoich praw bez naruszania praw innych osób oraz zakłada działanie zgodne z własnym interesem jak też stanowczą obronę siebie i swoich praw. Zarówno w przypadku uległości jak i agresji możemy mówić o braku szacunku do samego siebie i innych osób. Asertywność wymaga akceptacji siebie  i innych.",

        manipulujacy: "U jej podstaw leży maskowanie uczuć i brak otwartości, chęć wygrania cudzym kosztem, nastawienie na wykorzystanie innych, traktowanie innych jak pionki w grze, w której są przewidziani do odstrzału, podejrzliwość, nieuczciwość, traktowanie ludzi jako głupszych. Rezultatem tej postawy jest złość i agresja otoczenia, narastanie konfliktów, wymierne straty innych ludzi, niechęć do kontaktów z osobą manipulującą, utrata zaufania. Manipulatorom często zmienia się wyraz twarzy. Można zauważyć brak spójności między mową ciała, a słowami. Ta nieautentyczna mowa ciała jest charakterystyczna dla postawy manipulacyjnej. Manipulatorzy mają na ogół ugrzeczniony, na zmianę z agresywnym sposób bycia, ale z treści tego co mówią wynika jednoznacznie, że uważają innych za gorszych od siebie. Chcą wygrać cudzym kosztem, udając, że wcale tego nie chcą.",

        agresywny: "Reakcje agresywne na sytuacje przekraczania granic prowadzą z kolei do eskalacji konfliktu, pogorszenia relacji lub przekroczenia granic osoby, która formułuje w stosunku do nas oczekiwania przekraczające granice relacji. Chodzi tu zarówno o wszelkie formy agresji słownej, biernego oporu – agresywnego, nie reagowania na formułowane oczekiwania, jak i posługiwanie się manipulacyjnymi technikami w stosunku do osoby, która wydaje się przekraczać granice. Przykłady takich zachowań można dowolnie „mnożyc”: obrzucenie obelgami znajomego, który po raz kolejny chce od nas pożyczyć pieniądze, ignorowanie telefonów od klienta, który najprawdopodobniej chce pomocy wykraczającej poza zakres obowiazków pracownika. Przekraczanie granic drugiej osoby (zwłaszcza w przypadku reakcji bierno – agresywnych), nawet w reakcji na jej zachowania manipulacyjne, nie ma nic wspólnego z asertywnością. Podobnie sprawa będzie się miała z artykułowaniem własnych oczekiwań w stosunku do innych. Dlatego asertywnymi bedziemy określać takie zachowania wobec innych osób, które pozwalając na zachowanie własnych oczekiwań, nie bedą naruszały cudzych granic. ", 

        bierny: "Reakcje bierne polegają na podporzadkowaniu się formułowanym w stosunku do nas oczekiwaniom.Nie chodzi tu o każde oczekiwania, ale takie, które w sposób manipulacyjny przekraczają nasze granice.Zachowania uległe mogą pojawić się w różnych układach społecznych. Najczesciej spotykamy je tam, gdzie istnieje hierarchia władzy: podwładni często ujawniają zachowania uległe względem swoich przełożonych, choć zdarzają się także sytuacje odwrotne – przełożony jest uległy wobec swoich podwładnych. Uległość może pojawić się także w relacjach miedzy współpracownikami tej samej organizacji lub w relacjach pracownik organizacji – klient. Uległość pojawia się jako reakcja na przekroczenie psychologicznych granic przez inne osoby, w celu przeciwdziałania eskalacji konfliktu lub agresji.",
    },
    manifestationsOfPosture: {
        asertywny: "- Bronimy własnych praw, uznając jednocześnie prawa innych, <br> -  Wyrażamy swoje potrzeby, poglądy i odczucia, <br> -  Nasze stosunki z innymi cechuje wiara w siebie.",
        manipulujacy: "- Lekceważymy innych, ważny jest zysk w swoją stronę. <br> - Zachowujemy się tak żeby jak najwięcej zyskać małym kosztem.",
        agresywny: "- Bronimy własnych praw, lekceważąc prawa innych, <br> - Dominujemy nad innymi, czasami ich upokarzając, <br> - Nie słuchamy innych, <br> - Podejmujemy decyzje nie uwzględniając praw innych, <br> - Przyjmujemy postawy wrogie lub obronne.",
        bierny: "- Lekceważymy własne prawa, pozwalając innym je naruszać <br> - Nie przedstawiamy własnych potrzeb, poglądów i odczuć <br> - Zachowujemy się nieuczciwie – nasz działania nie pokrywają się ze słowami, co powoduje nagromadzenie się złości i nieufności.",
    },
    aSignOfBehavior: {
        asertywny: "- Takie jest moje zdanie, <br> - Tak to odczuwam, <br> - Tak oto widzę tę sytuację, <br> - Chciałbym/ chciałabym usłyszeć, <br> jak Ty się z tym czujesz; może uda nam <br> się znaleźć rozwiązanie zadowalające nas oboje.",
        manipulujacy: "- Liczy się to co ja zyskam, a nie Ty. <br> - Liczą się moje odczucia, nie Twoje. <br> - Nie ważne że Ty wiele stracisz, ważne że ja łatwo coś zyskam.",
        agresywny: "- Ja tak uważam, a Ty jesteś głupi, skoro myślisz inaczej, <br> - Takie są moje odczucia – Twoje się nie liczą, <br> - Tak oto wygląda sytuacja: nie obchodzi mnie, jak Ty ją widzisz.",
        bierny: "- Liczy się to, co Ty myślisz, nie to, co ja myślę, <br> - Liczą się Twoje odczucia, nie moje, <br> - Ważne jest, jak Ty widzisz tę sytuację.",
    }
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
                returnOrder.order.push(resultsValue.sortingTheResults.indexOf(item))
                returnOrder.attitude.push(element);
            }
        })
    })
    returnOrder.attitude.forEach(item => {
        returnOrder.amountOfPoints.push(resultsValue[item])
    })

    resultsValue.nameOfAttitudes.forEach(item => {
        document.querySelector(`.result-${item}`).textContent = resultsValue[item];
    })
}

const displayingInformation = () => {
    const mainContainer = document.querySelector('.container-for-the-result');
    mainContainer.innerHTML = null;

    document.querySelector('.interpretation-of-the-result-title').textContent = "Jak interpretować wynik?";
    document.querySelector('.interpretation-of-the-result-text').textContent = "Aplikacja podliczyła punkty dla wszystkich postaw oraz wyświetliła wynik. Pamiętaj im większy procent uzyskanych punktów tym ta postawa jest Ci bliższa. Wyniki mogą być do siebie podobne, jeżeli tak będzie przeczytaj te postawy i określ wówczas które postawy odnoszą się bardziej do Ciebie. Zwróć szczegółną uwagę na różnicę procentowe.";

    const mostPointsFirst = document.createElement('h3');
    mostPointsFirst.className = "most-points";
    mostPointsFirst.textContent = `Najwięcej punktów uzyskano dla postawy - ${returnOrder.attitude[3]} (${returnOrder.amountOfPoints[3]} punkty)`
    mainContainer.appendChild(mostPointsFirst)

    const pointsWereObtained = document.createElement('p');
    pointsWereObtained.className = "points-were-botained";
    pointsWereObtained.innerHTML = `Uzyskałeś <b>${((parseInt(returnOrder.amountOfPoints[3]) * parseInt(105)) / 100)}%</b> punktów z tej postawy`
    mainContainer.appendChild(pointsWereObtained)

    const detailsOfThisAttitude = document.createElement('h3');
    detailsOfThisAttitude.className = "details-of-this-attitude";
    detailsOfThisAttitude.textContent = "Szczegóły tej postawy oraz wyjaśnienie"
    mainContainer.appendChild(detailsOfThisAttitude);

    const detailsOfThisPostureText = document.createElement('p');
    detailsOfThisPostureText.className = "details-of-this-Posture-Text";
    detailsOfThisPostureText.innerHTML = informationToDisplay.postureDetails[returnOrder.attitude[3]];
    mainContainer.appendChild(detailsOfThisPostureText);

    const manifestationsOfPosture = document.createElement('h3');
    manifestationsOfPosture.className = "manifestations-of-posture-title";
    manifestationsOfPosture.textContent = "Przejawy postawy";
    mainContainer.appendChild(manifestationsOfPosture)

    const manifestationsOfPostureText = document.createElement('p');
    manifestationsOfPostureText.className = "manifestations-of-posture-text";
    manifestationsOfPostureText.innerHTML = informationToDisplay.manifestationsOfPosture[returnOrder.attitude[3]];
    mainContainer.appendChild(manifestationsOfPostureText)

    const thisBehaviorMeansTitle = document.createElement('h3');
    thisBehaviorMeansTitle.className = "this-behavior-means-title";
    thisBehaviorMeansTitle.textContent = "Takie zachowanie oznacza, że";
    mainContainer.appendChild(thisBehaviorMeansTitle);

    const thisBehaviorMeansContent = document.createElement('p');
    thisBehaviorMeansContent.className = "this-behavior-means-content";
    thisBehaviorMeansContent.innerHTML = informationToDisplay.aSignOfBehavior[returnOrder.attitude[3]];
    mainContainer.appendChild(thisBehaviorMeansContent);

    // -------------------

    const mostPointsInSecondOrder = document.createElement('h3');
    mostPointsInSecondOrder.className = "most-points";
    mostPointsInSecondOrder.textContent = `W drugiej kolejności najwięcej punktów uzyskano dla postawy - ${returnOrder.attitude[2]} (${returnOrder.amountOfPoints[2]} punkty)`;
    mainContainer.appendChild(mostPointsInSecondOrder);

    const pointsWereObtainedSecond = document.createElement('p');
    pointsWereObtainedSecond.className = "points-were-botained"
    pointsWereObtainedSecond.innerHTML = `Uzyskano <b>${((parseInt(returnOrder.amountOfPoints[2]) * parseInt(105)) / 100)}%</b> punktów z tej postawy, to <b>${(((parseInt(returnOrder.amountOfPoints[3]) * parseInt(105)) / 100) - ((parseInt(returnOrder.amountOfPoints[2]) * parseInt(105)) / 100)).toFixed(2)}%</b> mniej od postawy ${returnOrder.attitude[3]}`
    mainContainer.appendChild(pointsWereObtainedSecond)
    
    mainContainer.appendChild(detailsOfThisAttitude.cloneNode(true))
    const detailsOfThisPostureTextSecond = document.createElement('p');
    detailsOfThisPostureTextSecond.className = "details-of-this-Posture-Text";
    detailsOfThisPostureTextSecond.textContent = informationToDisplay.postureDetails[returnOrder.attitude[2]];
    mainContainer.appendChild(detailsOfThisPostureTextSecond);
    
    mainContainer.appendChild(manifestationsOfPosture.cloneNode(true))

    const manifestationsOfPostureTextSecond = document.createElement('p');
    manifestationsOfPostureTextSecond.className = "manifestations-of-posture-text";
    manifestationsOfPostureTextSecond.innerHTML = informationToDisplay.manifestationsOfPosture[returnOrder.attitude[2]];
    mainContainer.appendChild(manifestationsOfPostureTextSecond);
    
    mainContainer.appendChild(thisBehaviorMeansTitle.cloneNode(true))

    const thisBehaviorMeansContentSecond = document.createElement('p');
    thisBehaviorMeansContentSecond.className = "this-behavior-means-content";
    thisBehaviorMeansContentSecond.innerHTML = informationToDisplay.aSignOfBehavior[returnOrder.attitude[2]];
    mainContainer.appendChild(thisBehaviorMeansContentSecond);

    // ---------------------

    const mostPointsInThirdOrder = document.createElement('h3');
    mostPointsInThirdOrder.className= "most-points";
    mostPointsInThirdOrder.textContent = `W trzeciej kolejności najwięcej punktow uzyskano dla postawy -  ${returnOrder.attitude[1]} (${returnOrder.amountOfPoints[1]} punkty)`;
    mainContainer.appendChild(mostPointsInThirdOrder);

    const pointsWereObtainedThird = document.createElement('p');
    pointsWereObtainedThird.className = "points-were-botained";
    pointsWereObtainedThird.innerHTML = `Uzyskano <b>${((parseInt(returnOrder.amountOfPoints[1]) * parseInt(105)) / 100)}%</b> punktów z tej postawy, to <b>${(((parseInt(returnOrder.amountOfPoints[2]) * parseInt(105)) / 100) - ((parseInt(returnOrder.amountOfPoints[1]) * parseInt(105)) / 100)).toFixed(1)}%</b> mniej od postawy ${returnOrder.attitude[2]}`
    mainContainer.appendChild(pointsWereObtainedThird)

    mainContainer.appendChild(detailsOfThisAttitude.cloneNode(true))

    const detailsOfThisPostureTextThird = document.createElement('p');
    detailsOfThisPostureTextThird.className = "details-of-this-Posture-Text";
    detailsOfThisPostureTextThird.innerHTML = informationToDisplay.postureDetails[returnOrder.attitude[1]];
    mainContainer.appendChild(detailsOfThisPostureTextThird);

    mainContainer.appendChild(manifestationsOfPosture.cloneNode(true))

    const manifestationsOfPostureTextThird = document.createElement('p');
    manifestationsOfPostureTextThird.className = "manifestations-of-posture-text";
    manifestationsOfPostureTextThird.innerHTML = informationToDisplay.manifestationsOfPosture[returnOrder.attitude[1]];
    mainContainer.appendChild(manifestationsOfPostureTextThird);
   
    mainContainer.appendChild( thisBehaviorMeansTitle.cloneNode(true))

    const thisBehaviorMeansContentThird = document.createElement('p');
    thisBehaviorMeansContentThird.className = "this-behavior-means-content";
    thisBehaviorMeansContentThird.innerHTML = informationToDisplay.aSignOfBehavior[returnOrder.attitude[1]];
    mainContainer.appendChild(thisBehaviorMeansContentThird);

    // ------------------------

    const mostPointsInFourthOrder = document.createElement('h3');
    mostPointsInFourthOrder.className= "most-points";
    mostPointsInFourthOrder.textContent = `W czwartej kolejności najwięcej punktow uzyskano dla postawy -  ${returnOrder.attitude[0]} (${returnOrder.amountOfPoints[0]} punkty)`;
    mainContainer.appendChild(mostPointsInFourthOrder);

    const pointsWereObtainedFourth = document.createElement('p');
    pointsWereObtainedFourth.className = "points-were-botained";
    pointsWereObtainedFourth.innerHTML = `Uzyskano <b>${((parseInt(returnOrder.amountOfPoints[0]) * parseInt(105)) / 100)}%</b> punktów z tej postawy, to <b>${(((parseInt(returnOrder.amountOfPoints[1]) * parseInt(105)) / 100) - ((parseInt(returnOrder.amountOfPoints[0]) * parseInt(105)) / 100)).toFixed(1)}%</b> mniej od postawy ${returnOrder.attitude[1]}`
    mainContainer.appendChild(pointsWereObtainedFourth)

    mainContainer.appendChild(detailsOfThisAttitude.cloneNode(true))

    const detailsOfThisPostureTextFourth = document.createElement('p');
    detailsOfThisPostureTextFourth.className = "details-of-this-Posture-Text";
    detailsOfThisPostureTextFourth.innerHTML = informationToDisplay.postureDetails[returnOrder.attitude[0]];
    mainContainer.appendChild(detailsOfThisPostureTextFourth);

    mainContainer.appendChild(manifestationsOfPosture.cloneNode(true))

    const manifestationsOfPostureTextFourth = document.createElement('p');
    manifestationsOfPostureTextFourth.className = "manifestations-of-posture-text";
    manifestationsOfPostureTextFourth.innerHTML = informationToDisplay.manifestationsOfPosture[returnOrder.attitude[0]];
    mainContainer.appendChild(manifestationsOfPostureTextFourth);
   
    mainContainer.appendChild( thisBehaviorMeansTitle.cloneNode(true))

    const thisBehaviorMeansContentFourth = document.createElement('p');
    thisBehaviorMeansContentFourth.className = "this-behavior-means-content";
    thisBehaviorMeansContentFourth.innerHTML = informationToDisplay.aSignOfBehavior[returnOrder.attitude[0]];
    mainContainer.appendChild(thisBehaviorMeansContentFourth);

}