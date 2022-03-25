let ytreDia;
let indreDia;
let lengde;
const KilosPerM3 = {
    "B25": 2400
}

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    ytreDia = document.getElementById("yDia").value;
    indreDia = document.getElementById("iDia").value;
    length = document.getElementById("lengde").value;
    let round = document.getElementById("round").value;
    let result = calculateVolume(ytreDia, indreDia, length, round);
    console.log(result);
    document.getElementById("resultat").innerHTML = Number.parseFloat(result).toFixed(round) + " cm<sup>3</sup> eller " + convertCm3tom3(result) + " m<sup>3</sup> <br> " + antallsekker(convertCm3tom3(result)) + " sekker";
});

function calculateVolume(width, air, length, round) {
    let totalradius = (width / 2) + (air / 2);
    let totalSylinderVolume = Math.PI * totalradius ** 2 * length;
    let emptySylinderVolume = Math.PI * (air / 2) ** 2 * length;
    console.log(totalradius + " " + totalSylinderVolume + " " + emptySylinderVolume);
    return (totalSylinderVolume - emptySylinderVolume);
}

function antallsekker(vekt) {
    return KilosPerM3['B25'] / vekt;

}

function convertCm3tom3(cm3) {
    return Number.parseFloat(cm3 / (1000 * 1000)).toFixed(round);
}