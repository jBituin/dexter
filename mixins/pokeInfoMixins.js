export default {
  computed: {
    getTypes() {
      if(!this.pokemonDetails) return [];
      return this.pokemonDetails.types.map(({ type }) => type.name);
    },
    getAbilities() {
      if(!this.pokemonDetails) return [];
      return this.pokemonDetails.abilities.map(({ ability }) => ability.name);
    },
    getStatNames() {
      if(!this.pokemonDetails) return [];
      return this.pokemonDetails.stats.map(({ stat }) => stat.name);
    },
    getStatValues() {
      if(!this.pokemonDetails) return [];
      return this.pokemonDetails.stats.map(({ base_stat }) => base_stat);
    },
  }
};
