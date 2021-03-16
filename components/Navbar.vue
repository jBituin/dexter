<template>
  <nav class="navbar px-5 py-2" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="home navbar-item"> Home </nuxt-link>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-ice" @click="viewRandomPokemon">
            <strong>Surprise Me</strong>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    viewRandomPokemon() {
      const randomId = this.$router.push(`/details/${this.getRandomInt()}`);
    },
    getRandomInt(min = 1, max = 898) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>

<style scoped>
</style>