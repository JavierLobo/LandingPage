var listaDeFrases = {
    "phrases": [
        {
            "id": "1",
            "phrase": "No temo a los ordenadores; lo que temo es quedarme sin ellos",
            "author": "Isaac Asimov"
        }, 
        {
            "id": "2",
            "phrase": "Una vez un ordenador me venció jugando al ajedrez, pero no me opuso resistencia cuando pasamos al kick boxing",
            "author": "Emo Philips"
        },
        {
            "id": "3",
            "phrase": "La informática tiene que ver con los ordenadores lo mismo que la astronomía con los telescopios",
            "author": "Edsger W. Dijkstra"
        },
        {
            "id": "4",
            "phrase": "El ordenador nació para resolver problemas que antes no existían",
            "author": "Bill Gates"
        },
        {
            "id": "5",
            "phrase": "El software es como la entropía: difícil de atrapar, no pesa, y cumple la Segunda Ley de la Termodinámica, es decir, tiende a incrementarse",
            "author": "Norman Augustine"
        },
        {
            "id": "6",
            "phrase": "El software es un gas: se expande hasta llenar su contenedor",
            "author": "Nathan Myhrvold"
        },
        {
            "id": "7",
            "phrase": "Todas las piezas deben unirse sin ser forzadas. Debe recordar que los componentes que está reensamblando fueron desmontados por usted, por lo que si no puede unirlos debe existir una razón. Pero sobre todo, no use un martillo",
            "author": "Manual de mantenimiento de IBM, año 1925"
        },
        {
            "id": "8",
            "phrase": "Los estándares son siempre obsoletos. Eso es lo que los hace estándares",
            "author": "Alan Bennett"
        },
        {
            "id": "9",
            "phrase": "La física es el sistema operativo del Universo",
            "author": "Steven R Garman"
        },
        {
            "id": "0",
            "phrase": "El hardware es lo que hace a una máquina rápida; el software es lo que hace que una máquina rápida se vuelva lenta",
            "author": "Craig Bruce"
        }
    ], 
    "pageable": {
	    "offset": 9,
	    "page": 1,
	    "pageNumber": 3,
	    "Size": 3,
	    "unpaged": false,
	    "paged": true
    }
}

/**
 * Muestra la frase del dia
 */
function showPhraseOfTheDay() {
    var phraseOfTheDay = listaDeFrases.phrases[Math.round(Math.random()*10)].phrase;

    // conectar con el servicio del servidor que nos mandará una frase

    // Referenciamos el elemento que contendrá la frase del dia y la mostramos
    var idPhraseOfTheDay = document.getElementById("phraseText");
    var idAuthor = document.getElementById("authorText");
    var rng = Math.round(Math.random()*10);
    
    idPhraseOfTheDay.innerHTML = listaDeFrases.phrases[rng].phrase;
    idAuthor.innerHTML = "-- " + listaDeFrases.phrases[rng].author;
}

showPhraseOfTheDay();


// // namespace global
// var MIAPLICACION = MIAPLICACION || {

// };


// fuentes:
// https://developer.mozilla.org/es/docs/Web/JavaScript/Introducción_a_JavaScript_orientado_a_objetos