let yeet: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export { }
function GetAllTallerNumbers(tall: number, liste: number[]): number[] {
    let taller = [];
    for (let i = 0; i < liste.length; i++) {
        if (liste[i] > tall) {
            taller.push(liste[i]);
        }
    }
    return taller;
}
let s: string = " uhh";
console.log(GetAllTallerNumbers(5, yeet) + s);