import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Route, Link } from "react-router-dom";
import StoryRouter from "storybook-react-router";
import { linkTo } from "@storybook/addon-links";
import { BreadcrumbItem } from "reactstrap";
import README from "@availity/breadcrumbs/README.md";
import { Preview } from "../util";

const Breadcrumbs = React.lazy(() => import("@availity/breadcrumbs"));

const emptyState = "..";

const ReactRouterBreadcrumbs = () => (
  <div>
    <Breadcrumbs
      emptyState={text("Empty State", emptyState)}
      active={text("Active Page", "React Router Breadcrumb")}
      homeUrl={text("Home Url", "public/apps/dashboard")}
    >
      <BreadcrumbItem>
        <Link to="react-router-parent">Custom Breadcrumb Demo</Link>
      </BreadcrumbItem>
    </Breadcrumbs>
    <p>Hello! this is a demo for breadcrumbs with:</p>
    <ul>
      <li>Custom Breadcrumb Items</li>
      <li>react-router Integration</li>
    </ul>
    <p>
      In this case we are using react-router to navigate from one page to
      another, but any custom content (as long as it is inside a react-strap
      BreadcrumbItem) can be used.
    </p>
  </div>
);
const ReactRouterDestination = () => (
  <div>
    <Breadcrumbs
      active={text("Active Page", "Custom Breadcrumb Demo")}
      homeUrl={text("Home Url", "public/apps/dashboard")}
    />
    <Link to="/react-router-demo">react-router Link Back To demo</Link>
    <p>Sample destination page with react-router navigation</p>
  </div>
);
export default {
  title: "Components/Breadcrumbs",
  decorators: [
    withKnobs,
    StoryRouter(
      {
        "/": linkTo("Linked stories", "destination")
      },
      { initialEntries: ["/react-router-demo"] }
    )
  ],
  parameters: {
    readme: {
      // Show readme at the addons panel
      sidebar: README,
      StoryPreview: Preview
    }
  }
};
export const Default = () => (
  <Breadcrumbs
    emptyState={text("Empty State", emptyState)}
    active={text("Active Page", "Payer Spaces")}
    homeUrl={text("Home Url", "public/apps/dashboard")}
  />
);
Default.story = {
  name: "default"
};
export const ActiveBlank = () => <Breadcrumbs active="" />;
ActiveBlank.story = {
  name: "active blank"
};
export const WithParents = () => (
  <Breadcrumbs
    homeUrl={text("Home Url", "public/apps/dashboard")}
    emptyState={text("Empty State", emptyState)}
    crumbs={[
      { name: "Grand Parent", url: "/grand-parent" },
      { name: "Parent", url: "/parent" }
    ]}
    active={text("Active Page", "Payer Spaces")}
  />
);
WithParents.story = {
  name: "with parents"
};
export const WithCustomContent = () => (
  <div>
    <Route path="/react-router-parent" component={ReactRouterDestination} />
    <Route path="/react-router-demo" component={ReactRouterBreadcrumbs} />
  </div>
);
WithCustomContent.story = {
  name: "with custom content"
};
