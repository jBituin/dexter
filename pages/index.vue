<template>
  <div class="is-full is-flex is-justify-content-center is-align-items-center">
    <div class="card">
      <header
        class="card-header has-text-centered is-center is-centered is-justify-content-center"
      >
        <div class="columns is-mobile is-full">
          <div class="column has-text-right">
            <h1 class="card-header-title is-size-3 is-centered">Pokedex</h1>
          </div>
          <div class="column has-text-left mt-2">
            <poke-loading :loading="isLoading" />
          </div>
        </div>
      </header>
      <div class="card-content p-0">
        <poke-list :pokemons="pokemons" ref="list" />
      </div>
    </div>
  </div>
</template>

<script>
import PokeList from "../components/PokeList.vue";
import PokeLoading from "../components/PokeLoading.vue";
import PokeApi from "../api";

export default {
  data() {
    return {
      pokemons: [],
      page: 1,
      isLoading: false,
    };
  },
  async mounted() {
    this.$nextTick(() => {
      if (this.$refs["list"]) {
        const listElement = this.$refs["list"].$el;
        listElement.addEventListener("scroll", () => {
          if (
            listElement.scrollTop + listElement.clientHeight >=
            listElement.scrollHeight
          ) {
            this.page++;
            this.getData();
          }
        });
      }
    });

    await this.getData();
  },
  components: {
    PokeList,
    PokeLoading,
  },
  methods: {
    async getData() {
      this.isLoading = true;
      const response = await PokeApi.getPokemon(this.page);
      this.pokemons.push(...response.results);
      this.isLoading = false;
    },
  },
  watch: {
    pokemons: {
      handler() {
        if ([1, 2].includes(this.page)) {
          this.page++;
          this.getData();
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.card {
  width: 600px !important;
}
</style>