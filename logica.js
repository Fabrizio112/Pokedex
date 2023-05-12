import { traerDatosDelPokemon, completarLosTipos, completarELPokemon, eliminarCards, cambiarElBackgroundCardTop, comprobarLaClaseDelBotonDeTipos as colorearElBotonDeTipos } from './visual.js'

export function kanto () {
  const $GENERACION_KANTO = document.querySelector('#kanto')
  const POKEMONES_KANTO = {
    min: 1,
    max: 151
  }
  $GENERACION_KANTO.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_KANTO.min; i <= POKEMONES_KANTO.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}

export function johto () {
  const $GENERACION_JOHTO = document.querySelector('#johto')
  const POKEMONES_JOHTO = {
    min: 152,
    max: 251
  }
  $GENERACION_JOHTO.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_JOHTO.min; i <= POKEMONES_JOHTO.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function hoenn () {
  const $GENERACION_HOENN = document.querySelector('#hoenn')
  const POKEMONES_HOENN = {
    min: 252,
    max: 386
  }
  $GENERACION_HOENN.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_HOENN.min; i <= POKEMONES_HOENN.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function sinnoh () {
  const $GENERACION_SINNOH = document.querySelector('#sinnoh')
  const POKEMONES_SINNOH = {
    min: 387,
    max: 493
  }
  $GENERACION_SINNOH.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_SINNOH.min; i <= POKEMONES_SINNOH.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function teselia () {
  const $GENERACION_TESELIA = document.querySelector('#teselia')
  const POKEMONES_TESELIA = {
    min: 494,
    max: 649
  }
  $GENERACION_TESELIA.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_TESELIA.min; i <= POKEMONES_TESELIA.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function kalos () {
  const $GENERACION_KALOS = document.querySelector('#kalos')
  const POKEMONES_KALOS = {
    min: 650,
    max: 721
  }
  $GENERACION_KALOS.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_KALOS.min; i <= POKEMONES_KALOS.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function alola () {
  const $GENERACION_ALOLA = document.querySelector('#alola')
  const POKEMONES_ALOLA = {
    min: 722,
    max: 809
  }
  $GENERACION_ALOLA.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_ALOLA.min; i <= POKEMONES_ALOLA.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function galar () {
  const $GENERACION_GALAR = document.querySelector('#galar')
  const POKEMONES_GALAR = {
    min: 810,
    max: 902
  }
  $GENERACION_GALAR.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_GALAR.min; i <= POKEMONES_GALAR.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
export function paldea () {
  const $GENERACION_PALDEA = document.querySelector('#paldea')
  const POKEMONES_PALDEA = {
    min: 903,
    max: 1010
  }
  $GENERACION_PALDEA.addEventListener('click', async () => {
    eliminarCards()
    for (let i = POKEMONES_PALDEA.min; i <= POKEMONES_PALDEA.max; i++) {
      const DATOS_POKEMON = await traerDatosDelPokemon(i)
      const tipos = await completarLosTipos(DATOS_POKEMON, i)
      completarELPokemon(DATOS_POKEMON, i, tipos)
      colorearElBotonDeTipos()
      cambiarElBackgroundCardTop(i)
    }
  })
}
