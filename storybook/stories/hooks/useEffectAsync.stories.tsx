import React, { useState } from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { useEffectAsync, useToggle } from "@availity/hooks";
import { Card } from "reactstrap";
import README from "@availity/hooks/README.md";
import { Preview } from "../util";

const asyncFunction = data =>
  new Promise(resolve => setInterval(() => resolve(data), 1000));
type AsyncComponentProps = {
  mockData?: string
};
const AsyncComponent: React.SFC<AsyncComponentProps> = ({ mockData }) => {
  const [loading, toggle] = useToggle(true);
  const [state, setState] = useState(null);
  useEffectAsync(
    async () => {
      if (!loading) {
        toggle();
      }
      const newState = await asyncFunction(mockData);
      setState(newState);
      toggle();
    },
    [mockData]
  );
  return <Card body>{loading ? "Loading..." : state}</Card>;
};
export default {
  title: "Hooks/useEffectAsync",
  decorators: [withKnobs],
  parameters: {
    readme: {
      // Show readme at the addons panel
      sidebar: README,
      StoryPreview: Preview
    }
  }
};
export const Default = () => (
  <AsyncComponent mockData={text("Data", "Test Data")} />
);
Default.story = {
  name: "default"
};
