import { mount } from "@vue/test-utils";
import PokeLoading from "@/components/PokeLoading.vue";

describe("PokeLoading", () => {
  const wrapper = mount(PokeLoading);
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("is does not animate when no loading props", async () => {
    const animating = wrapper.find(".pokeball.animate");
    expect(animating.exists()).toBe(false);
  });

  it("is animating when passed loading props", async () => {
    await wrapper.setProps({ loading: true });
    const animating = wrapper.find(".pokeball.animate");
    expect(animating.exists()).toBe(true);
  });
});
