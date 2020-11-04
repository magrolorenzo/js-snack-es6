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

let min_ascii = 97;
let max_ascii = 122;

const new_array = main_array.map((element) =>{
    let {name, surname} = element;
    let new_elem = {};
    new_elem.name = name;
    new_elem.surname = surname;
    return new_elem;
});

new_array.forEach((element) => element.position = String.fromCharCode(getRndInteger(min_ascii,max_ascii)));

console.log(main_array);
console.log(new_array);





function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
