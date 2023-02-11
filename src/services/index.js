import axios from 'axios'
import PokemonService from './pokemon'

const API_ENVS = {
    production: '',
    development: '',
    local: 'https://pokeapi.co/api/v2'
}

const httpClient = axios.create({
    baseURL: API_ENVS.local
})

export default {
    pokemon: PokemonService(httpClient)
}