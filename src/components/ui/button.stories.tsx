import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

// Define meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default Button (default variant, default size)
export const Default: Story = {
  args: {
    children: "Default Button",
  },
};

// Destructive Button (destructive variant, default size)
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

// Outline Button (outline variant, default size)
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

// Secondary Button (secondary variant, default size)
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Ghost Button (ghost variant, default size)
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Link Button (link variant, default size)
export const Link: Story = {
  args: {
    variant: "link",
    children: "Link Button",
  },
};

// Small Button (small size, default variant)
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

// Large Button (large size, default variant)
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// Disabled Button (disabled state, default variant, default size)
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};
