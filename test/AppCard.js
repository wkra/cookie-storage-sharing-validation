import { mount } from "@vue/test-utils";
import AppCard from "@/components/AppCard.vue";

describe("AppCard", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(AppCard);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
