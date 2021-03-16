<template>
  <div>
    <div
      v-if="pokemonDetails"
      class="card is-clickable"
      @click="setPokemonDetails"
      :style="`background: linear-gradient(45deg, var(--${firstType}), var(--${secondType}))`"
    >
      <div class="card-image">
        <figure class="image is-3by2">
          <img
            v-if="pokemonDetails"
            :src="
              pokemonDetails.sprites.other['official-artwork'].front_default
            "
            alt="Placeholder image"
          />
          <poke-loading v-else />
        </figure>
      </div>
      <div class="card-content p-2">
        <h2
          class="title is-centered is-4 is-size-6-mobile is-capitalized has-text-centered has-text-weight-bold"
        >
          {{ name }}
        </h2>
      </div>
    </div>
    <div class="error-message" v-if="hasError">Error fetching</div>
  </div>
</template>

<script>
import PokeLoading from "./PokeLoading";
import PokeInfoMixins from "../mixins/pokeInfoMixins";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    detailsUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      pokemonDetails: null,
      hasError: false,
    };
  },
  components: {
    PokeLoading,
  },
  mixins: [PokeInfoMixins],
  async mounted() {
    try {
      const response = await fetch(this.detailsUrl);
      if (!response) return;
      this.pokemonDetails = await response.json();
    } catch (err) {
      this.hasError = true;
    }
  },
  methods: {
    setPokemonDetails() {
      this.$router.push(`/details/${this.pokemonDetails.id}`);
    },
  },
  computed: {
    firstType() {
      return this.getTypes[0];
    },
    secondType() {
      return this.getTypes[1] || "none";
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
.pokemon-name {
  text-transform: capitalize;
}
</style>