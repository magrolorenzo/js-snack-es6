// Creare copia di un array di partenza aggiungendo agli elementi una proprietà position con una lettera casuale

const main_array = [
    {
        name: "Lorenzo",
        surname: "Magro"
    },
    {
        name: "Marco",
        surname: "Rossi"
    },
    {
        name: "Anna",
        surname: "Bianchi"
    },
    {
        name: "Francesca",
        surname: "Verdi"
    },
    {
        name: "Gino",
        surname: "Magro"
    },
];

const new_array = main_array.map((element) =>{
    return element;
});
console.log(new_array);
