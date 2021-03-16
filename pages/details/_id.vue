<template>
  <div>
    <h1 v-if="hasError" class="title is-size-2 has-text-danger">
      Sorry, the random generated id is not found in the database
    </h1>
    <poke-detail
      v-if="pokemonDetails"
      :pokemonDetails="pokemonDetails"
    ></poke-detail>
  </div>
</template>

<script>
import PokeDetail from "@/components/PokeDetail";
import PokeLoading from "@/components/PokeLoading.vue";
import api from "@/api";

export default {
  components: {
    PokeDetail,
  },
  data() {
    return {
      hasError: false,
      isLoading: true,
      pokemonDetails: null
    };
  },
  async mounted() {
    this.openLoading;
    this.isLoading = true;
    try {
      const id = this.$router?.currentRoute?.params?.id;
      if (id) this.pokemonDetails = await api.getPokemonDetails(id);
    } catch (err) {
      this.hasError = true;
    }
    this.isLoading = false;
  },
  methods: {
    openLoading() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.isFullPage ? null : this.$refs.element.$el,
      });
      setTimeout(() => loadingComponent.close(), 3 * 1000);
    },
  },
};
</script>

<style scoped>
</style>