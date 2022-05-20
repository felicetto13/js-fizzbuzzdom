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
 */


let text = "";

for(let i=1;i<=100;i++){
    if ((i % 3 == 0) && (i % 5 == 0)) {
        text = "FizzBuzz";
    } else if (i % 3 == 0) {
        text ="Fizz";
    }else if (i % 5 == 0) {
        text="Buzz";
    }else {
        text = i.toString();
    }
    console.log(text);
}
