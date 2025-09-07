import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ModelSelector from "../app/components/ModelSelector";

const meta: Meta<typeof ModelSelector> = {
  component: ModelSelector,
  title: "Components/ModelSelector",
};

export default meta;

type Story = StoryObj<typeof ModelSelector>;
export const Default: Story = {
  render: () => {
    return <ModelSelector model="gpt-3.5-turbo" setModel={() => {}} />;
  },
};

export const SimpleTest = {
  render: () => <div>Hello Storybook!</div>,
};
