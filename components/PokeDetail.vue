<template>
  <div
    class="has-text-centered is-justify-content-center is-align-items-center"
  >
    <h1 v-if="pokemonDetails" class="pokemon-name title is-size-1 is-capitalized">
      {{ pokemonDetails.name }}
    </h1>
    <div v-if="pokemonDetails" class="tile is-ancestor">
      <div
        class="tile is-parent is-justify-content-center is-align-items-center"
      >
        <article class="tile is-child">
          <p
            class="title has-text-centered has-text-left-mobile is-size-4-mobile"
          >
            Basic Info
          </p>
          <div class="content basic-info-content">
            <div class="columns is-mobile">
              <div class="column is-4 has-text-right has-text-left-mobile">
                <template v-for="title in infoTitles">
                  <poke-detail-stat :value="title" :key="title" />
                </template>
              </div>
              <div class="column has-text-left">
                <poke-detail-stat :value="'#' + pokemonDetails.id" />
                <poke-detail-stat
                  :value="toMetric(pokemonDetails.height) + 'm'"
                />
                <poke-detail-stat
                  :value="toMetric(pokemonDetails.weight) + 'kg'"
                />
                <div class="block">
                  <template v-for="type in getTypes">
                    <span :class="`tag pokemon is-${type}`" :key="type">{{
                      type
                    }}</span>
                  </template>
                </div>
                <div class="block mb-4">
                  <template v-for="ability in getAbilities">
                    <span
                      :class="`tag pokemon is-${getTypes[0]}`"
                      :key="ability"
                      >{{ ability }}</span
                    >
                  </template>
                </div>
                <poke-detail-stat
                  class="pt-1"
                  :value="pokemonDetails.base_experience"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child">
          <figure class="image is-1by1">
            <img
              v-if="pokemonDetails.sprites"
              :src="
                pokemonDetails.sprites.other['official-artwork'].front_default
              "
            />
          </figure>
        </article>
      </div>
      <div
        class="tile is-parent is-justify-content-center is-align-items-center"
      >
        <article class="tile is-child">
          <div class="content stat-content">
            <p
              class="title has-text-centered has-text-left-mobile is-size-4-mobile"
            >
              Base Stats
            </p>
            <div class="content">
              <div class="columns is-mobile">
                <div class="column is-5 has-text-right has-text-left-mobile">
                  <template v-for="statName in statTitles">
                    <poke-detail-stat :value="statName" :key="statName" />
                  </template>
                </div>
                <div class="column has-text-left">
                  <template v-for="(statValue, index) in getStatValues">
                    <b-progress
                      type="is-danger is-large"
                      :value="statValue"
                      :key="statTitles[index]"
                      :max="255"
                      show-value
                    ></b-progress>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import PokeInfoMixins from "@/mixins/pokeInfoMixins";

export default {
  name: "poke-detail",
  props: {
    pokemonDetails: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      infoTitles: [
        "ID:",
        "Height:",
        "Weight:",
        "Type:",
        "Ability:",
        "Base Exp:",
      ],
      statTitles: ["HP:", "Atk:", "Def:", "Sp. Atk:", "Sp. Def:", "Spd:"],
    };
  },
  mixins: [PokeInfoMixins],
  methods: {
    toMetric(value) {
      return parseInt(value) / 10;
    },
  },
};
</script>

<style scoped>
.image-container {
  max-height: 500px;
  max-width: 500px;
  margin: auto;
}
.pokemon {
  display: inline-block;
  min-width: 50px;
  margin: 3px;
  padding: 3px 5px;
  border-radius: 10px;
  text-transform: capitalize;
  text-align: center;
  font-weight: bold;
  color: white;
}
</style>