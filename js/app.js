/*
Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.

MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
Consigli del giorno:
        1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
        2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano” 

*/


/* 
    dichiariamo una variabile che deve contenere il testo da mostrare (Fizz, Buzz)

    facciamo un ciclo for che iteri fino al numero 100 dal numero 1

    MILESTONE 1
    -SE il numero è multiplo di 3 e di 5
        -allora scrivi nella variabile "FizzBuzz"
    -ALTRIMENTI 
        -SE il numero è multiplo di 3
            allora stampa Fizz
        -ALTRIMENTI 
            -SE IL NUMERO è MULTIPLO DI 5
                allora stampa "Buzz"
            -ALTRIMENTI stampa i
    
    MILESTONE 2
    Creiamo un container e ad ogni passaggio inseriamo i dati all'interno della pagina HTML

    MILESTONE 3

    Stilizzare la tabella cambiando gli stili quando abbiamo i valori "fizz", "buzz", "FizzBuzz"
 */


let text = "";
const container = document.createElement("div")
container.classList.add("container","p-5");
container.id = "container";
const h1 = document.createElement("h1")
h1.classList.add("text-center","text-white","m-5");
h1.append("FizzBuzzDOM");
document.getElementById("main-content").append(h1);
document.getElementById("main-content").append(container);
const row = document.createElement("div")
row.id = "row";
row.classList.add("row","gap-3","justify-content-center");
document.getElementById("container").append(row)
for(let i=1;i<=100;i++){
    let col= document.createElement("div");
col.id ="col"
col.classList.add("col-2","d-flex","align-items-center","justify-content-center","square");
document.getElementById("row").appendChild(col);
let classe="";
    if ((i % 3 == 0) && (i % 5 == 0)) {
        text = "FizzBuzz";
        classe ="bg-danger";
    } else if (i % 3 == 0) {
        text ="Fizz";
        classe ="bg-success";
    }else if (i % 5 == 0) {
        text="Buzz";
        classe ="bg-warning";
    }else {
        text = i.toString();
        classe ="bg-primary";
    }
    col.classList.add(classe);
    col.append(text)
    console.log(text);
}
