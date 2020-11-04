// Cartendo da un array crearne uno nuovo con i valori in posizione definita da 2 num inseriti dall utente
// Usa forEach e filter

const obj = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    },
    {
        id: 3,
        name: "C"
    },
    {
        id: 4,
        name: "D"
    },
    {
        id: 5,
        name: "E"
    },
    {
        id: 6,
        name: "F"
    },
    {
        id: 7,
        name: "G"
    }
];

const new_obj = [];

const num1 = parseInt(prompt("Inserisci posizione iniziale"));
const num2 = parseInt(prompt("Inserisci posizione finale"));

new_obj = obj.filter((element, index, array) =>{
    array.forEach
}
