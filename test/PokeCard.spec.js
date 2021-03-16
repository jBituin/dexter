import { mount } from "@vue/test-utils";
import PokeCard from "@/components/PokeCard.vue";
import mockPokemonData from "./pokemon.json";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockPokemonData)
  })
);
describe("PokeCard", () => {
  const mockData = {
    name: "Pikachu",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu"
  };
  const wrapper = mount(PokeCard, {
    propsData: {
      name: mockData.name,
      detailsUrl: mockData.url
    }
  });

  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("displays the name", async () => {
    const name = wrapper.find(".title");
    expect(name.exists()).toBe(true);
    expect(name.text()).toBe(mockData.name);
  });

  it("display the image", async () => {
    const image = wrapper.findAll("figure.image");
    expect(image.exists()).toBe(true);
  });

  it("display error message when an error is encountered", async () => {
    await wrapper.setData({
      hasError: true
    });
    const errorMessage = wrapper.find(".error-message");
    expect(errorMessage.exists()).toBe(true);
  });
});
