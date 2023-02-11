import { defineStore } from 'pinia'
import services from '../services'

export const pokemonStore = defineStore('pokemon', {
    state: () => {
        return {
            dadosPokemon: [],
            dadosPokemonUrl: [],
            dadosPokemonEvolution:[],
            error: ''
           
        }
    },
    actions: {
        async seachPokemon (search) {
           if(search === null) return        
           const request = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + search.toLowerCase())

          if(request.status === 404){
                this.error = "Pokemon não encontrado!"
                return request.status
           }
           const data  = await request.json()
           this.dadosPokemon = data
        },
        async getPokemonUrl (pokemonUrl) {
          
           const request = await fetch(pokemonUrl)
            const data  = await request.json()
            this.dadosPokemonUrl = data
            
         },

        async getPokemonEvolution (pkmEvolution) {
            for (var i = 0; i < pkmEvolution.length; i++) {
                const request = await fetch("http://pokeapi.co/api/v2/pokemon/" + pkmEvolution[i])
                const data  = await request.json()
                this.dadosPokemonEvolution[i] = data
            }
         }
    }
})