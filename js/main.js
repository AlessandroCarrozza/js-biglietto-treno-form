let nomeUtenteDom = document.getElementById("nomeUtente");
let nomeUtente;

let numKmDom = document.getElementById("numeroKm");
let numKm;


let etaUtenteDom = document.getElementById("etaUtente");
let etaUtente;


let buttonGeneraDom = document.getElementById("buttonGenera");
let buttonAnnullaDom = document.getElementById("buttonAnnulla");

buttonGeneraDom.addEventListener("click", 
    function () {
        nomeUtente = nomeUtenteDom.value;
        
        let nomePasseggero = document.getElementById("nomePasseggero");
        nomePasseggero.innerHTML = nomeUtente;




        etaUtente = etaUtenteDom.value;
        let offertaTicket = document.getElementById("offertaTicket");

        if (etaUtente == "Maggiorenne") {
            offertaTicket.innerHTML = "Biglietto Standard";
        } else if (etaUtente == "Minorenne") {
            offertaTicket.innerHTML = "Biglietto Junior";
        } else {
            offertaTicket.innerHTML = "Biglietto Senior";
        }




        numKm = numKmDom.value;
        const coeff = 0.21;
        let prezzoTicket = numKm * coeff;
        
    }
);


buttonAnnullaDom.addEventListener("click", 
    function () {
        nomeUtenteDom.value = " ";

        numKmDom.value = " ";
    }
);