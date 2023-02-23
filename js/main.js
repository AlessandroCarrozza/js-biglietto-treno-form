const nomeUtenteDom = document.getElementById("nomeUtente");
let nomeUtente;

const numKmDom = document.getElementById("numeroKm");
let numKm;


const etaUtenteDom = document.getElementById("etaUtente");
let etaUtente;


const buttonGeneraDom = document.getElementById("buttonGenera");
const buttonAnnullaDom = document.getElementById("buttonAnnulla");

buttonGeneraDom.addEventListener("click", 
    function () {
        nomeUtente = nomeUtenteDom.value;
        
        let nomePasseggero = document.getElementById("nomePasseggero");
        nomePasseggero.innerHTML = nomeUtente;




        etaUtente = etaUtenteDom.value;
        let offertaTicket = document.getElementById("offertaTicket");

        numKm = numKmDom.value;
        const coeff = 0.21;
        let prezzoTicket = numKm * coeff;

        let discountTicketJunior = ((numKm * coeff) * 20) / 100;
        let prezzoTicketJunior = prezzoTicket - discountTicketJunior;

        let discountTicketSenior = ((numKm * coeff) * 40) / 100;
        let prezzoTicketSenior = prezzoTicket - discountTicketSenior;
        
        let costoTicket = document.getElementById("costoTicket");

        if (etaUtente == "Maggiorenne") {
            offertaTicket.innerHTML = "Biglietto Standard";
            costoTicket.innerHTML = prezzoTicket.toFixed(2) + "€";
        } else if (etaUtente == "Minorenne") {
            offertaTicket.innerHTML = "Biglietto Junior";
            costoTicket.innerHTML = prezzoTicketJunior.toFixed(2) + "€";
        } else {
            offertaTicket.innerHTML = "Biglietto Senior";
            costoTicket.innerHTML = prezzoTicketSenior.toFixed(2) + "€";
        }

        
    }
);


buttonAnnullaDom.addEventListener("click", 
    function () {
        nomeUtenteDom.value = " ";

        numKmDom.value = " ";
    }
);