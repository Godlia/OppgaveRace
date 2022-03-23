let params = new URLSearchParams(window.location.search);
let navn: string = params.get("name");
let hastighet: string = params.get("Internettfart");
let dekoder: boolean;
let extender: boolean;
let dekoderord: string;
let rabatt: number = Number(params.get("Rabatt"));
let extenderord: string;
let monthpris: number;
let engangspris: number = 0;
let engangOrd: string;
const priser = {
    "50": 399,
    "100": 599,
    "300": 799,
    "500": 999,
    "Dekoder": 399,
    "Extender": 499
};

function parseText(): void {
    if (params.get("Dekoder") === "true") {
        dekoder = true;
    } else {
        dekoder = false;
    }
    if (params.get("Extender") === "true") {
        extender = true;
    } else {
        extender = false;
    }

    if (dekoder) {
        dekoderord = "Du har også bestilt en dekoder (pris: " + priser.Dekoder + ",-)";
    } else {
        dekoderord = "Du har ikke bestilt en dekoder";
    }

    if (extender) {
        if (dekoder) {
            extenderord = " og en extender (" + priser.Extender + ",-)";
        } else {
            extenderord = ", men du har bestilt en WiFi-Extender (" + priser.Extender + ",-)";
        }
    } else if (dekoder) {
        extenderord = " men ingen WiFi-extender";
    } else extenderord = " og heller ingen WiFi-Extender";
    monthpris = priser[hastighet.toString()]

    if (dekoder) { engangspris += priser.Dekoder; }
    if (extender) { engangspris += priser.Extender; }

    if (engangspris > 0) engangOrd = "Og du vil få en engangspris på " + engangspris + " kr."; else engangOrd = "";

}

function rabatter(pris: number): number {
    if (rabatt == null && rabatt == 0) { return pris; } else {
        return Math.round(pris - (pris / 100) * rabatt);
    }
}

parseText();


document.getElementById("Tittel").innerHTML = "Hei " + navn + "!";
document.getElementById("bestilling").innerHTML = "Du har bestilt en internettsfart på " + hastighet + " Megabit/S. " + dekoderord + " " + extenderord + ". ";
document.getElementById("priser").innerHTML = "Dette vil koste dere " + monthpris + " kr/mnd. " + engangOrd + "<br> Rabatt på " + rabatt + "% <br> Totalpris: " + (rabatter(monthpris) + rabatter(engangspris)) + " kr. (Før rabatt: " + (monthpris + engangspris) + " kr.)";
