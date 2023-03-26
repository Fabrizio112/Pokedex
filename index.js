
function ejecutar() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
        })
        .catch(error => console.log(error))
}


ejecutar();


let $generacionKanto = document.querySelector("#kanto")
let pokemonesDeKantoMin = 1;
let pokemonesDeKantoMax = 151;
$generacionKanto.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeKantoMin, pokemonesDeKantoMax)
    algoritmoDeOrdenamiento();


})

let $generacionJohto = document.querySelector("#johto")
let pokemonesDeJohtoMin = 152;
let pokemonesDeJohtoMax = 251;
$generacionJohto.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeJohtoMin, pokemonesDeJohtoMax)
    algoritmoDeOrdenamiento()
})

let $generacionHoenn = document.querySelector("#hoenn")
let pokemonesDeHoennMin = 252;
let pokemonesDeHoennMax = 386;
$generacionHoenn.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeHoennMin, pokemonesDeHoennMax)
    algoritmoDeOrdenamiento()
})

let $generacionSinnoh = document.querySelector("#sinnoh")
let pokemonesDeSinnohMin = 387;
let pokemonesDeSinnohMax = 493;
$generacionSinnoh.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeSinnohMin, pokemonesDeSinnohMax)
    algoritmoDeOrdenamiento()
})

let $generacionTeselia = document.querySelector("#teselia")
let pokemonesDeTeseliaMin = 494;
let pokemonesDeTeseliaMax = 649;
$generacionTeselia.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeTeseliaMin, pokemonesDeTeseliaMax)
    algoritmoDeOrdenamiento()
})

let $generacionKalos = document.querySelector("#kalos")
let pokemonesDeKalosMin = 650;
let pokemonesDeKalosMax = 721;
$generacionKalos.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeKalosMin, pokemonesDeKalosMax)
    algoritmoDeOrdenamiento()
})

let $generacionAlola = document.querySelector("#alola")
let pokemonesDeAlolaMin = 722;
let pokemonesDeAlolaMax = 809;
$generacionAlola.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeAlolaMin, pokemonesDeAlolaMax)
    algoritmoDeOrdenamiento()
})

let $generacionGalar = document.querySelector("#galar")
let pokemonesDeGalarMin = 810;
let pokemonesDeGalarMax = 902;
$generacionGalar.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDeGalarMin, pokemonesDeGalarMax)
    algoritmoDeOrdenamiento()
})

let $generacionPaldea = document.querySelector("#paldea")
let pokemonesDePaldeaMin = 903;
let pokemonesDePaldeaMax = 1010;
$generacionPaldea.addEventListener("click", () => {
    eliminarCards();
    elegirElPokemon(pokemonesDePaldeaMin, pokemonesDePaldeaMax)
    algoritmoDeOrdenamiento()
})

function elegirElPokemon(a, b) {
    for (let i = a; i <= b; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response => response.json())
            .then(pokemon => {
                let tipos = pokemon.types.map(type =>
                    `<button class="boton-tipos${i} mx-1 ${type.type.name}">${(type.type.name).toUpperCase()}</button>`);
                tipos = tipos.join("");
                $(".contenedor-de-divs").append(`
                <div class="card" name="${i}">
                    <div class="card-top${i}">
                        <img src="${pokemon.sprites.front_default}" class="img-card">
                    </div>
                    <div class="card-bottom">
                        <div class="mt-5">
                        <h1 class="titulo-card text-uppercase fs-3"># ${pokemon.id} ${pokemon.name}</h1>
                    <div class="py-3 " id="text-card">
                        <span class="mx-3 fw-bolder">Peso: ${pokemon.weight / 10}kg</span>
                        <span class="fw-bolder">Altura : ${pokemon.height / 10}m</span>
                    </div>
                        <div class="contenedor-de-botones-tipos py-3">
                            ${tipos}
                        </div>
                    </div>
                    </div> 
                </div>
                
        `)
                comprobarLaClaseDelBotonDeTipos();
                cambiarElBackgroundCardTop(i);
            })

    }
}
function eliminarCards() {
    document.querySelectorAll(".card").forEach(card => {
        card.remove();
    })
}

function cambiarElBackgroundCardTop(i) {
    let boton = document.querySelectorAll(`.boton-tipos${i}`)
    boton.forEach(bot => {
        if (bot.classList.item(2) === ("grass")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "green";
            }
        }
        if (bot.classList.item(2) === ("poison")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "purple";
            }
        }
        if (bot.classList.item(2) === ("fire")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "red";
            }
        }
        if (bot.classList.item(2) === ("flying")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#4a27c7";
            }
        }
        if (bot.classList.item(2) === ("water")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "blue";
            }
        }
        if (bot.classList.item(2) === ("bug")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#91a119";
            }
        }
        if (bot.classList.item(2) === ("steel")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#60a1b8";
            }
        }
        if (bot.classList.item(2) === ("dragon")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#5061e1";
            }
        }
        if (bot.classList.item(2) === ("electric")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "yellow";
            }
        }
        if (bot.classList.item(2) === ("ghost")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#704170";
            }
        }
        if (bot.classList.item(2) === ("fairy")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#f170f1";
            }
        }
        if (bot.classList.item(2) === ("ice")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#3fd8ff";
            }
        }
        if (bot.classList.item(2) === ("fighting")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "orange";
            }
        }
        if (bot.classList.item(2) === ("psychic")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#ef4179";
            }
        }
        if (bot.classList.item(2) === ("rock")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#afa981";
            }
        }
        if (bot.classList.item(2) === ("dark")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#50413f";
            }
        }
        if (bot.classList.item(2) === ("ground")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#915121";
            }
        }
        if (bot.classList.item(2) === ("normal")) {
            if (document.querySelector(`.card-top${i}`).style.backgroundColor) {
            } else {
                document.querySelector(`.card-top${i}`).style.backgroundColor = "#9fa19f";
            }
        }
    })
}

function comprobarLaClaseDelBotonDeTipos() {
    let boton = document.querySelectorAll(`[class*="boton-tipos"]`)
    boton.forEach(bot => {
        if (bot.classList.contains("grass")) {
            bot.style.backgroundColor = "green";
        }
        if (bot.classList.contains("poison")) {
            bot.style.backgroundColor = "purple";
        }
        if (bot.classList.contains("fire")) {
            bot.style.backgroundColor = "red";
        }
        if (bot.classList.contains("flying")) {
            bot.style.backgroundColor = "#4a27c7";
        }
        if (bot.classList.contains("water")) {
            bot.style.backgroundColor = "blue";
        }
        if (bot.classList.contains("bug")) {
            bot.style.backgroundColor = "#91a119";
        }
        if (bot.classList.contains("steel")) {
            bot.style.backgroundColor = "#60a1b8";
        }
        if (bot.classList.contains("dragon")) {
            bot.style.backgroundColor = "#5061e1";
        }
        if (bot.classList.contains("electric")) {
            bot.style.backgroundColor = "yellow";
        }
        if (bot.classList.contains("ghost")) {
            bot.style.backgroundColor = "#704170";
        }
        if (bot.classList.contains("fairy")) {
            bot.style.backgroundColor = "#f170f1";
        }
        if (bot.classList.contains("ice")) {
            bot.style.backgroundColor = "#3fd8ff";
        }
        if (bot.classList.contains("fighting")) {
            bot.style.backgroundColor = "orange";
        }
        if (bot.classList.contains("psychic")) {
            bot.style.backgroundColor = "#ef4179";
        }
        if (bot.classList.contains("rock")) {
            bot.style.backgroundColor = "#afa981";
        }
        if (bot.classList.contains("dark")) {
            bot.style.backgroundColor = "#50413f";
        }
        if (bot.classList.contains("ground")) {
            bot.style.backgroundColor = "#915121";
        }
        if (bot.classList.contains("normal")) {
            bot.style.backgroundColor = "#9fa19f";
        }
    })

}

function algoritmoDeOrdenamiento() {
    let $allCards = document.querySelectorAll(".card")
    for (let i = 0; i < $allCards.length; i++) {
        for (let p = 0; p < ($allCards.length - 1); p++) {
            if (Number($allCards[i].getAttribute("name")) > Number($allCards[i + 1].getAttribute("name"))) {
                let aux = $allCards[i]
                $allCards[i] = $allCards[i + 1]
                $allCards[i + 1] = aux
            }
        }
    }

    for (let i = 0; i < $allCards.length; i++) {
        $allCards[i].style.order = i
    }

}
///Falta cambiar el background del boton y de la tarjeta del pokemon de acuerdo a la clase que posean