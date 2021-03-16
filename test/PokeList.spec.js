import { mount } from "@vue/test-utils";
import PokeList from "@/components/PokeList.vue";

describe("PokeList", () => {
  const wrapper = mount(PokeList, {
    propsData: {
      pokemons: []
    }
  });
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("display error message when no data", async () => {
    const errorMessage = wrapper.find('.error-message')
    expect(errorMessage.exists()).toBe(true);
  });

  it("displays the correct number of data", async () => {
    const pokeCards = wrapper.findAll(".poke-card");
    expect(pokeCards.exists()).toBe(false);

    const mockData = [
      {
        name: "Pikachu",
        url: "https://pokeapi.co/api/v2/pokemon/pikachu"
      },
      {
        name: "Raichu",
        url: "https://pokeapi.co/api/v2/pokemon/raichu"
      },
      {
        name: "Pichu",
        url: "https://pokeapi.co/api/v2/pokemon/pichu"
      }
    ];
    await wrapper.setProps({ pokemons: mockData });
    const data = wrapper.findAll(".poke-card");
    expect(data.length === 3).toBe(true);
  });
});
