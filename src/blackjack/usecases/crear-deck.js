import _ from "underscore";


/**
 * esta funcion crea un nuevo Deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array <string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas 
 */

// Esta función crea un nuevo deck
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

   let  deck = [];

    if ( !tiposDeCarta ||  tiposDeCarta === 0) throw new  Error ('tiposDeCarta es obligatorio como arreglo de string')
    if ( !tiposEspeciales ||  tiposEspeciales === 0) throw new  Error ('tiposEspeciales es obligatorio como arreglo de string')

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

// export default crearDeck


