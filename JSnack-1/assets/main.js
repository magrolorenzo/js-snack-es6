// Creare un array di oggetti bici con nome e peso
// Stampare a schermo la bici con peso minore con Destructuring e template literal

const bikes =[
    {
        nome: "bici 1",
        peso: "2"
    },
    {
        nome: "bici 2",
        peso: "6"
    },
    {
        nome: "bici 3",
        peso: "1"
    },
    {
        nome: "bici 4",
        peso: "8"
    }
];

var peso_min = bikes[0].peso;
var lightest_bike;

bikes.forEach((bici) =>{
    let {nome, peso} = bici;
    console.log(`${nome} pesa ${peso} kg`);
    if(peso < peso_min){
        lightest_bike = nome;
        peso_min = peso;
    }
});

console.log(`Bici più leggera: ${lightest_bike} - Peso: ${peso_min}`);
