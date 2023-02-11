<template>
  <nav-bar />
  <custom-search @send="send"/>
  <div class="container">
    <div class="row">
      <div class="col-12 mt-5"> 
        <custom-list
        v-if="dadosPokemon"
        :dados="dadosPokemon"
        />
      </div>
    </div>
    <div class="row error">
      <div v-show="dadosPokemon.length === 0">
        <h3>{{ error }}</h3>
      </div>
    </div>
   
  </div>

</template>

<script>
/* import CustomPokemon from '../../components/CustomPokemon.vue' */
import NavBar from '../../components/NavBar.vue'
import CustomSearch from '../../components/CustomSearch.vue'
import CustomList from '../../components/CustomList.vue'
import { pokemonStore } from '../../store/pokemon'
import { storeToRefs } from 'pinia'
import { ref, watchEffect } from 'vue'


export default {
    components: {
        NavBar,
        CustomSearch,
        CustomList
    },
    setup() {

      const store = pokemonStore()
      const teste = ref()
        
      const { dadosPokemon, error } = storeToRefs(store)

     
      async function send(name) {
          if(name === "") return
          await store.seachPokemon(name)
        
      }

      watchEffect(() => {
        console.log(error.value)
      })
     
      return{
        send,
        dadosPokemon,
        error
    
      }

    }
}
</script>


<style lang="scss">

nav {
  padding: 30px;

}

</style>
