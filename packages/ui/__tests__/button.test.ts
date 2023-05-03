import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../components/ButtonType2.vue";
import { executionAsyncId } from "async_hooks";
import { wrap } from "module";

describe("UI Button", () => {
  it("renders the button", () => {
    const wrapper = mount(Button);
    expect(wrapper).toBeDefined();
  });

  it("can be disabled with a prop", () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true,
      },
    });

    /* expect(wrapper.html()).toContain('disabled="true"'); */
    const button = wrapper.find("button");
    expect(button.element.disabled).toBe(true);
  });

  it("emits the correct text when clicked", () => {
    const wrapper = mount(Button);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(
      (wrapper.emitted()["click:mybutton"][0] as Array<Array<string>>)[0]
    ).toBe("hello from button");
  });
});
