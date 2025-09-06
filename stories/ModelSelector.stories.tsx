import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ModelSelector from "../app/components/ModelSelector";

const meta: Meta<typeof ModelSelector> = {
  component: ModelSelector,
  title: "Components/ModelSelector",
};

export default meta;

type Story = StoryObj<typeof ModelSelector>;

// Ye tumhara original story hai
export const Default: Story = {
  render: () => {
    // tumhari original component logic yahan hogi
    return <ModelSelector model="gpt-3.5-turbo" setModel={() => {}} />;
  },
};

// Aur ye ek simple test story hai, jisse sirf test karna hai ki storybook chal raha hai ya nahi
export const SimpleTest = {
  render: () => <div>Hello Storybook!</div>,
};
