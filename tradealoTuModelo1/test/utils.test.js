import { describe, expect, it } from 'vitest'
import { filterExchanges } from '../src/utils'
import exchangeMock from './exchangesMock.json'
//npm run test 
// npm install -D vitest
/* {
  "scripts": {
    "test": "vitest",
    "coverage": "vitest run --coverage"
  }
}
*/
/*
Dado que los test tienen que ejecutarse muy rápido,
no podemos hacer peticiones a una API externa.
Para simular el comportamiento de la API, hemos creado un archivo
con un array de 100 objetos que simulan los exchanges de la API.
El archivo se encuentra en la carpeta test y se llama exchangesMock.json
Este objeto mockeado será el que usemos para hacer los test.
*/
const listExchangesMock = exchangeMock

describe('empty spec', () => {
  
  /** 
   si filtramos los exchanges con nombre=null y trust_score=undefined, 
   la función filterExchanges debe devolver un array de 100 elementos
  */
  it('test 1', () => {
    const filtered = filterExchanges(listExchangesMock, null, undefined)
    expect(filtered).toBeInstanceOf(Array)
    expect(filtered).toHaveLength(100)
  })

  /** 
   si filtramos los exchanges con nombre='cake' y trust_score=1, 
   la función filterExchanges debe devolver un array de 1 elemento
  */
  it('test 2', () => {
    const filtered = filterExchanges(listExchangesMock, 'cake', 1)
    expect(filtered).toBeInstanceOf(Array)
    expect(filtered).toHaveLength(1)
  })


   /** 
   si filtramos los exchanges con nombre=null' y trust_score=9, 
   la función filterExchanges debe devolver un array de 8 elementos
  */
   it('test 3', () => {
    const filtered = filterExchanges(listExchangesMock, null, 9)
    expect(filtered).toBeInstanceOf(Array)
    expect(filtered).toHaveLength(8)
  })

   /** 
   si filtramos los exchanges con nombre=null' y trust_score=10, 
   la función filterExchanges debe devolver un array vacio
  */
   it('test 4', () => {
    const filtered = filterExchanges(listExchangesMock, null, 10)
    expect(filtered).toBeInstanceOf(Array)
    expect(filtered).toHaveLength(0)
  })

  /** 
   si filtramos los exchanges con nombre='bi' y trust_score=1, debe
   devolver un array cuyo primer elemento sea un objeto con las siguientes propiedades:
      name: 'Huobi',
      image:'https://assets.coingecko.com/markets/images/25/small/logo_V_colour_black.png?1669177364',
      trust_score: 10,

  */
  it('test 5', () => {
    const filtered = filterExchanges(listExchangesMock, 'bi', 1)
    const obj = {
      name: 'Huobi',
      image:'https://assets.coingecko.com/markets/images/25/small/logo_V_colour_black.png?1669177364',
      trust_score: 10,
    }
    expect(filtered[0]).toEqual(expect.objectContaining(obj))
  })


 
})
