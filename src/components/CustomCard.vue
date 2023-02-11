<template>
    <div class="card"  @click="handleToggle">
        <img :src="dados.sprites.front_default" class="card-img-top">
       <div class="card-body">
           <h3 class="card-title">{{ dados.name }}</h3>
           <div
                :class="{
                    animate__fadeOutUp: state.isClosing
                }"
                class="animate__animated animate__fadeInUp animate__faster"
                v-if="state.isOpen"
                >
            <div class="row mt-4 col-md-12">
                <div class="col-md-6">
                    <span class="card-text">HP: {{ dados.stats[0]?.base_stat }}</span>
                </div>
                <div class="col-md-6">
                    <span class="card-text">Atk: {{ dados.stats[1]?.base_stat }}</span>
                    
                </div>
                <div class="col-md-6">
                    <span class="card-text">Defense: {{ dados.stats[2]?.base_stat }}</span>
                </div>
                <div class="col-md-6">
                    <span class="card-text">Spe Atk: {{ dados.stats[3]?.base_stat }}</span>
                </div>
                <div class="col-md-6">
                    <span class="card-text">Spe Def: {{ dados.stats[4]?.base_stat }}</span>
                </div>
                <div class="col-md-6">
                    <span class="card-text">Speed: {{ dados.stats[5]?.base_stat }}</span>
                </div>
                
            </div>
           <div class="row mt-4">
                <div class="col-md-6">
                    <span class="card-text">Height: {{ dados.height }}</span>
                </div>
                <div class="col-md-6">
                    <span class="card-text">Weight: {{ dados.weight }}</span>
                </div>
            </div>
            <div class="row text-center">
                <div v-for="t in dados.types" :key="t">
                    <p class="card-text type">{{ t.type.name }}</p>
                </div>
                
            </div>
        </div>
        <div class="mt-8 d-flex justify-content-end" v-if="!state.isOpen">
            <svg width="22" height="22" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.9975 0L8.5 6.18084L15.0025 0L17 1.90283L8.5 10L0 1.90283L1.9975 0Z"
                fill="#41167f"/>
            </svg>
        </div>
            
        </div>
    </div>
    
</template>

<script>
import { reactive } from 'vue'

export default {
    props: {
        dados: {
            type: Object,
            required: true
        },
        isOpened: { 
            type: Boolean, 
            default: false },
    },
    setup (props) {
        const state = reactive({
            isOpen: props.isOpened,
            isClosing: !props.isOpened
        })
        async function handleToggle () {
            state.isClosing = true
            state.isOpen = !state.isOpen
            state.isClosing = false
    }
        return {
            state,
            handleToggle
        }
    }
    

}
</script>

<style>

</style>