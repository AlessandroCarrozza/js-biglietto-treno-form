let nomeUtenteDom = document.getElementById("nomeUtente");
let nomeUtente;

let numKmDom = document.getElementById("numeroKm");
let numKM;


let etaUtenteDom = document.getElementById("etaUtente");
let etaUtente;


let buttonGeneraDom = document.getElementById("buttonGenera");
let buttonAnnullaDom = document.getElementById("buttonAnnulla");

buttonGeneraDom.addEventListener("click", 
    function () {
        nomeUtente = nomeUtenteDom.value;
        
        let nomePasseggero = document.getElementById("nomePasseggero");
        nomePasseggero.innerHTML = nomeUtente;


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


buttonAnnullaDom.addEventListener("click", 
    function () {
        nomeUtenteDom.value = " ";

        numKmDom.value = " ";
    }
);