import { mount, RouterLinkStub } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar", () => {
  const wrapper = mount(Navbar, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  });
  it("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it("should have Home link", async () => {
    const homeButton = wrapper.find(".home");
    expect(homeButton.exists()).toBe(true);
  });

  it("shoud have 'Surprise Me' button", async () => {
    const surpiseMe = wrapper.find(".button");
    expect(surpiseMe.exists()).toBe(true);
    expect(surpiseMe.text()).toBe("Surprise Me");
  });
});
