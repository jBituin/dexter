import { mount } from "@vue/test-utils";
import PokeDetail from "@/components/PokeDetail.vue";
import mockPokemonData from "./pokemon.json";

describe("PokeDetail", () => {
  const wrapper = mount(PokeDetail, {
    propsData: {
      pokemonDetails: mockPokemonData
    },
    stubs: {
      'poke-detail-stat': true,
      'b-progress': true
    }
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("displays the name", () => {
    const name = wrapper.find(".pokemon-name");
    expect(name.exists()).toBe(true);
    expect(name.text()).toBe(mockPokemonData.name);
  });

  it("display the image", () => {
    const image = wrapper.findAll("figure.image");
    expect(image.exists()).toBe(true);
  });

  it("displays the Base Stats", () => {
    const baseStats = wrapper.findAll(".stat-content");
    expect(baseStats.exists()).toBe(true);
  });

  it("displays the Basic Info", () => {
    const basicInfo = wrapper.findAll(".basic-info-content");
    expect(basicInfo.exists()).toBe(true);
  });
});
