import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./Card";

// Define meta configuration for the Card component
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default Card (basic structure with a title and description)
export const DefaultCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Default Card Title</CardTitle>
          <CardDescription>This is the description for the default card.</CardDescription>
        </CardHeader>
        <CardContent>
          This is the content section of the card.
        </CardContent>
        <CardFooter>
          Footer content goes here.
        </CardFooter>
      </>
    ),
  },
};

// Card with Custom Class (demonstrating how to apply custom styling to the card)
export const CustomClassCard: Story = {
  args: {
    className: "bg-blue-100",
    children: (
      <>
        <CardHeader>
          <CardTitle>Custom Class Card Title</CardTitle>
          <CardDescription>This card has a custom background color.</CardDescription>
        </CardHeader>
        <CardContent>
          Custom styling can be applied to change the appearance of the card.
        </CardContent>
        <CardFooter>
          Footer with custom styling.
        </CardFooter>
      </>
    ),
  },
};

// Card without Footer (showing how to render a card without a footer section)
export const CardWithoutFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>No Footer Card</CardTitle>
          <CardDescription>This card does not include a footer.</CardDescription>
        </CardHeader>
        <CardContent>
          The content section remains intact without a footer.
        </CardContent>
      </>
    ),
  },
};

// Card with a Long Description (showing how the card looks with a longer description)
export const LongDescriptionCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Long Description Card</CardTitle>
          <CardDescription>
            This card has a much longer description text that demonstrates how the card component adjusts to handle extended content. The description will wrap properly inside the card without breaking the layout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Content goes here.
        </CardContent>
        <CardFooter>
          Footer information.
        </CardFooter>
      </>
    ),
  },
};

// Card with Only Title and Content (no description)
export const CardWithOnlyTitleAndContent: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Title Only Card</CardTitle>
        </CardHeader>
        <CardContent>
          This card only contains a title and content, with no description.
        </CardContent>
        <CardFooter>
          Footer content goes here.
        </CardFooter>
      </>
    ),
  },
};

// Card with Multiple Content Sections (using multiple `CardContent` sections for more complex layouts)
export const MultiContentCard: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Multi-Content Card</CardTitle>
          <CardDescription>This card has multiple content sections.</CardDescription>
        </CardHeader>
        <CardContent>
          First content section here.
        </CardContent>
        <CardContent>
          Second content section with more information.
        </CardContent>
        <CardFooter>
          Footer with additional links or actions.
        </CardFooter>
      </>
    ),
  },
};

// Card with Empty Footer (footer is included, but empty)
export const CardWithEmptyFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Empty Footer Card</CardTitle>
          <CardDescription>This card has a footer, but it's empty.</CardDescription>
        </CardHeader>
        <CardContent>
          Content goes here.
        </CardContent>
        <CardFooter>
          {/* Empty footer */}
        </CardFooter>
      </>
    ),
  },
};

// Card with Multiple Headers (showing how multiple headers can be used within the card layout)
export const CardWithMultipleHeaders: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>First Header</CardTitle>
          <CardDescription>First header description.</CardDescription>
        </CardHeader>
        <CardHeader>
          <CardTitle>Second Header</CardTitle>
          <CardDescription>Second header description.</CardDescription>
        </CardHeader>
        <CardContent>
          This card contains multiple headers.
        </CardContent>
        <CardFooter>
          Footer content here.
        </CardFooter>
      </>
    ),
  },
};
