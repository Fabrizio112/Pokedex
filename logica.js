import { elegirElPokemon, eliminarCards } from './visual.js'

export function kanto () {
  const $generacionKanto = document.querySelector('#kanto')
  const pokemonesDeKantoMin = 1
  const pokemonesDeKantoMax = 151
  $generacionKanto.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeKantoMin, pokemonesDeKantoMax)
    algoritmoDeOrdenamiento()
  })
}
export function johto () {
  const $generacionJohto = document.querySelector('#johto')
  const pokemonesDeJohtoMin = 152
  const pokemonesDeJohtoMax = 251
  $generacionJohto.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeJohtoMin, pokemonesDeJohtoMax)
    algoritmoDeOrdenamiento()
  })
}
export function hoenn () {
  const $generacionHoenn = document.querySelector('#hoenn')
  const pokemonesDeHoennMin = 252
  const pokemonesDeHoennMax = 386
  $generacionHoenn.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeHoennMin, pokemonesDeHoennMax)
    algoritmoDeOrdenamiento()
  })
}
export function sinnoh () {
  const $generacionSinnoh = document.querySelector('#sinnoh')
  const pokemonesDeSinnohMin = 387
  const pokemonesDeSinnohMax = 493
  $generacionSinnoh.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeSinnohMin, pokemonesDeSinnohMax)
    algoritmoDeOrdenamiento()
  })
}
export function teselia () {
  const $generacionTeselia = document.querySelector('#teselia')
  const pokemonesDeTeseliaMin = 494
  const pokemonesDeTeseliaMax = 649
  $generacionTeselia.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeTeseliaMin, pokemonesDeTeseliaMax)
    algoritmoDeOrdenamiento()
  })
}
export function kalos () {
  const $generacionKalos = document.querySelector('#kalos')
  const pokemonesDeKalosMin = 650
  const pokemonesDeKalosMax = 721
  $generacionKalos.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeKalosMin, pokemonesDeKalosMax)
    algoritmoDeOrdenamiento()
  })
}
export function alola () {
  const $generacionAlola = document.querySelector('#alola')
  const pokemonesDeAlolaMin = 722
  const pokemonesDeAlolaMax = 809
  $generacionAlola.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeAlolaMin, pokemonesDeAlolaMax)
    algoritmoDeOrdenamiento()
  })
}
export function galar () {
  const $generacionGalar = document.querySelector('#galar')
  const pokemonesDeGalarMin = 810
  const pokemonesDeGalarMax = 902
  $generacionGalar.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDeGalarMin, pokemonesDeGalarMax)
    algoritmoDeOrdenamiento()
  })
}
export function paldea () {
  const $generacionPaldea = document.querySelector('#paldea')
  const pokemonesDePaldeaMin = 903
  const pokemonesDePaldeaMax = 1010
  $generacionPaldea.addEventListener('click', () => {
    eliminarCards()
    elegirElPokemon(pokemonesDePaldeaMin, pokemonesDePaldeaMax)
    algoritmoDeOrdenamiento()
  })
}

function algoritmoDeOrdenamiento () {
  const $allCards = document.querySelectorAll('.card')
  for (let i = 0; i < $allCards.length; i++) {
    for (let p = 0; p < ($allCards.length - 1); p++) {
      if (Number($allCards[i].getAttribute('name')) > Number($allCards[i + 1].getAttribute('name'))) {
        const aux = $allCards[i]
        $allCards[i] = $allCards[i + 1]
        $allCards[i + 1] = aux
      }
    }
  }

  for (let i = 0; i < $allCards.length; i++) {
    $allCards[i].style.order = i
  }
}
