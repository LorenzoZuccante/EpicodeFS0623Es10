/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for (i = 0;i < pets.length; i++){
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log(pets)
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log(pets)
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.splice(0,1)
pets.push("redfish")

console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
let nuovaProprietà = "licensePlate"
let valNuovaPro = 1
for (i = 0;i< cars.length; i++){
  cars[i]
  [nuovaProprietà] = valNuovaPro
}
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
/*let nuovoOgetto ="anno"
cars.push(nuovoOgetto)
/*for (i=0;i<cars.length;i++){
  let esemarray = cars[i].trims;
if (esemarray.length > 0){
esemarray.pop();  
}

}
console.log(cars)


/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (i = 0; i < cars.length; i++){
  let xyz = cars[i].trims;
  if (xyz.length > 0){
    justTrims.push(xyz[0]);
  }
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (i = 0; i < cars.length; i++){
  if (cars[i].color.indexOf() !="b" ){
    console.log("fizz")
  }else{console.log("buzz")}
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let indice = 0
while (indice > -1 && numericArray[indice] !== 32){
  console.log(numericArray[indice])
indice++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
let alfabeto = "abcdefghilmnopqrstuvz"
let arrayDiDestinazione = []
for (i = 0; i < charactersArray.length; i++){
  let caratteri = charactersArray[i]
  switch (caratteri){
    case "a":
    arrayDiDestinazione.push(0)
    case "b":
      arrayDiDestinazione.push(1)
      case "c":
        arrayDiDestinazione.push(2)
        case "d":
          arrayDiDestinazione.push(3)
          case "e":
            arrayDiDestinazione.push(4)
            case "f":
              arrayDiDestinazione.push(5)
              case "g":
                arrayDiDestinazione.push(6)
                case "h":
                  arrayDiDestinazione.push(7)
                  case "i":
                    arrayDiDestinazione.push(8)
                    case "l":
                      arrayDiDestinazione.push(9)
                      case "m":
                        arrayDiDestinazione.push(10)
                        case "n":
                          arrayDiDestinazione.push(11)
                          case "o":
                            arrayDiDestinazione.push(12)
                            case "p":
                              arrayDiDestinazione.push(13)
                              case "q":
                                arrayDiDestinazione.push(14)
                                case "r":
                                  arrayDiDestinazione.push(15)
                                  case "s":
                                    arrayDiDestinazione.push(16)
                                    case "t":
                                      arrayDiDestinazione.push(17)
                                      case "u":
                                        arrayDiDestinazione.push(18)
                                        case "v":
                                          arrayDiDestinazione.push(19)
                                          case "z":
                                            arrayDiDestinazione.push(20)


  }
} console.log(arrayDiDestinazione)