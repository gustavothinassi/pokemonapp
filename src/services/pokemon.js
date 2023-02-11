export default httpClient => ({
    getAll: async () => {
      const response = await httpClient.get('/pokemon/ditto')
  
      return {
        data: response.data
      }
    },
    
    getPokemonSearch: async ({ search }) => {
      const response = await httpClient.get('/pokemon/' + search, {})
      console.log(response)
  
      return {
        data: response.data
      }
    },
    teste: async ({tes}) => {
        console.log(tes)
    }
  })