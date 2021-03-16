<template lang="html">
	<div class="list p-5">
    <div v-if="pokemons && pokemons.length" class="columns is-multiline is-mobile is-centered">
      <template v-for="pokemon in pokemons">
        <poke-card
          class="poke-card column is-one-third"
          :key="pokemon.name"
          :name="pokemon.name"
          :detailsUrl="pokemon.url"
        />
      </template>
    </div>
    <div v-else>
      <p class="error-message has-text-danger subtitle">No records found</p>
    </div>
  </div>
</template>

<script>
import PokeCard from "./PokeCard.vue";

export default {
  name: "poke-list",
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  components: {
    "poke-card": PokeCard,
  },
  data() {
    return {
      pokeIndex: [],
      imageUrl: null,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="css" scoped>
.section .container .card .card-content .list {
  min-height: 200px;
  max-height: 720px;
  overflow-y: auto;
}
</style>