<template>
    <div class="row d-flex justify-content-center">
            <custom-card
                class="mx-4 col-md-3"
                v-for="(pkm, index) in dadosPokemonEvolution" 
                :key="pkm"
                :is-opened="index === 0"
                :dados="pkm"
            />
    </div>
   
</template>

<script>
import {watchEffect } from 'vue'
import { pokemonStore } from '../store/pokemon'
import { storeToRefs } from 'pinia'
import CustomCard from './CustomCard.vue'
export default {
    props: {
        dados: {
            type: Object,
            required: true
        }
    },
    components: {
        CustomCard
    },
    setup(props) {
        const store = pokemonStore()
        const { dadosPokemonUrl, dadosPokemonEvolution } = storeToRefs(store)

        watchEffect(async () => {
            if(props.dados.length !== 0) {
                await store.getPokemonUrl(props.dados.evolution_chain.url)
            }
            if(dadosPokemonUrl.value.length !== 0) {
                var evolution = pokemonEvolution(dadosPokemonUrl.value.chain)
                var idEvolution = pokemonId(evolution)
                await store.getPokemonEvolution(idEvolution)
            }
            
        })

        function pokemonEvolution(evolution) {
            var array = []
            var evolutionEvolves =  evolution.evolves_to
            array.push(evolution.species.url)

            for(var i= 0; i < evolutionEvolves.length; i++) {
                array = array.concat(pokemonEvolution(evolutionEvolves[i]))
            }
            return array
        }

        function pokemonId(evolutionArray) {
            var evolArray = []

            for ( var i= 0; i < evolutionArray.length; i++) {
                evolutionArray[i] =  evolutionArray[i].split('/')
               
            }
            for ( var j= 0; j < evolutionArray.length; j++) {
                evolArray.push(parseInt(evolutionArray[j][evolutionArray[j].length - 2]))
            }
            return evolArray
        }


        
        return {
            dadosPokemonUrl,
            dadosPokemonEvolution
        }
    }
}
</script>

<style>

</style>