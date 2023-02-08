import { filterExchanges } from './src/utils'
import './style.css'

let fullExchangesList = []


// <<<<Tu código aquí>>>> 
// Captura el evento de envio del formulario
// y filtra los datos (guardados en el array global fullExchangesList) en función 
// de los valores de los inputs del formulario
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const trust_score = document.querySelector('#score').value
    const filtered = filterExchanges(fullExchangesList, name, trust_score)
    console.log(filtered)
    document.querySelector('#count').innerHTML=`${filtered.length} resultados`
    const msg = filtered.map(e=>{
        return `<img src='${e.image}'>  ${e.name}    ` 
    }).join('<br/>') 
    document.querySelector('#results').innerHTML=msg

    
})


/*
Esta función lee los datos de la API Coingecko y devuelve una array con todos los exchanges
*/
    async function readDataFromApi(){
        const request = await fetch('https://api.coingecko.com/api/v3/exchanges')
        return await request.json()
    }


/*
Esta función se llama IIFE (Immediately Invoked Function Expression)
Es una función que se ejecuta inmediatamente después de ser declarada
En concreto se ejecuta 1 vez cuando se carga la página web.
*/
(async function onLoadPage(){
   // Te recomiendo que no modifiques esta función
   fullExchangesList = await readDataFromApi()
   console.log(fullExchangesList)
})()