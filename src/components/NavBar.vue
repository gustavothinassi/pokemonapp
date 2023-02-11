<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <h3 class="navbar-brand titulo">Pokemon APP</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Pokemons</router-link>
        </li>
        <li class="nav-item">
            <router-link class="nav-link" to="/favorito">Favorito</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>