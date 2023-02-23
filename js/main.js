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
        
        let nomePasseggeroDom = document.getElementById("nomePasseggero");
        nomePasseggeroDom.innerHTML = nomeUtente;




        etaUtente = etaUtenteDom.value;
        let offertaTicketDom = document.getElementById("offertaTicket");

        numKm = numKmDom.value;
        const coeff = 0.21;
        let prezzoTicket = numKm * coeff;

        let discountTicketJunior = ((numKm * coeff) * 20) / 100;
        let prezzoTicketJunior = prezzoTicket - discountTicketJunior;

        let discountTicketSenior = ((numKm * coeff) * 40) / 100;
        let prezzoTicketSenior = prezzoTicket - discountTicketSenior;

        let costoTicketDom = document.getElementById("costoTicket");

        if (etaUtente == "Maggiorenne") {
            offertaTicketDom.innerHTML = "Biglietto Standard";
            costoTicketDom.innerHTML = prezzoTicket.toFixed(2) + "€";
        } else if (etaUtente == "Minorenne") {
            offertaTicketDom.innerHTML = "Biglietto Junior";
            costoTicketDom.innerHTML = prezzoTicketJunior.toFixed(2) + "€";
        } else {
            offertaTicketDom.innerHTML = "Biglietto Senior";
            costoTicketDom.innerHTML = prezzoTicketSenior.toFixed(2) + "€";
        }





        let numeroCarrozzaDom = document.getElementById("numero-carrozza");
        let numeroCarrozza = Math.floor(Math.random() * 10 ) + 1;
        numeroCarrozzaDom.innerHTML = numeroCarrozza;


        


        
    }
);


buttonAnnullaDom.addEventListener("click", 
    function () {
        nomeUtenteDom.value = " ";

        numKmDom.value = " ";
    }
);