import { mount } from "@vue/test-utils";
import PokeDetailStat from "@/components/PokeDetailStat.vue";

describe("PokeDetailStat", () => {
  const mockValue = "Test";
  const wrapper = mount(PokeDetailStat, {
    propsData: {
      value: mockValue
    }
  });
  
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should display the correct value", async () => {
    const title = wrapper.find(".title");
    expect(title.text()).toBe(mockValue);
  });
});
