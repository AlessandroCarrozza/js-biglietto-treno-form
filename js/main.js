let nomeUtenteDom = document.getElementById("nomeUtente");
let nomeUtente;

let numKmDom = document.getElementById("numeroKm");
let numKM;


let etaUtenteDom = document.getElementById("etaUtente");
let etaUtente;


let buttonGeneraDom = document.getElementById("buttonGenera");

buttonGeneraDom.addEventListener("click", 
    function () {
        nomeUtente = nomeUtenteDom.value;
        console.log(nomeUtente);

        numKM = numKmDom.value;
        console.log(numKM);


        etaUtente = etaUtenteDom.value;

        if (etaUtente == "Maggiorenne") {
            console.log("Ticket Standard");
        } else if (etaUtente == "Minorenne") {
            console.log("Ticket Junior");
        } else {
            console.log("Ticket Senior");
        }
    }
);