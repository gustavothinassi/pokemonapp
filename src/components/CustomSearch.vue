<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-12">
                <form @submit.prevent="handleSubmit">
                    <div class="input-group mt-3">
                        <input type="text" class="form-control" v-model="pokemon" placeholder="encontrar pokemon">
                        <button class="btn btn-primary" type="submit">Encontrar</button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>
 
</template>

<script>

import { ref, onMounted } from 'vue'
export default {
    setup(_,{ emit }) {
       
        const pokemon = ref()

        function handleSubmit () {
            emit('send', pokemon.value)
        }

        return {
            handleSubmit,
            pokemon
            
        }
    }

}
</script>

<style>

</style>