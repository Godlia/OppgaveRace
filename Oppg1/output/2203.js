"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let yeet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function GetAllTallerNumbers(tall, liste) {
    let taller = [];
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] > tall) {
            taller.push(liste[i]);
        }
    }
    return taller;
}
let s = " uhh";
console.log(GetAllTallerNumbers(5, yeet) + s);
