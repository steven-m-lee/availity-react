---
title: <Space />
---

This is the provider component needed for `@availity/spaces` components to work. All `@availity/spaces` components must be children of a Spaces provider.

### Props

#### `clientId?: string`

The Client ID obtained from APIConnect. Must be subscribed to the slotmachine API.

#### `query?: string`

Override the default slotmachine query

#### `variables?: object`

Override the default variables used in the slotmachine query. Default: `{ types: ['space'] }`. If the spaces provider should contain spaces of a type other than `space`, you _must_ override this prop.

#### `spaces?: object[]`

Array of spaces to be passed into the Spaces provider. Useful for if you already have the spaces in your app and don't want the spaces provider to have to fetch them again.

#### `spaceIds?: string[]`

Array of spaceIds the Spaces provider should fetch the spaces for. Any `spaceIds` already included in `spaces` will not be fetched again.

#### `payerIds?: string[]`

Array of payerIds the Spaces provider should fetch the spaces for. Any `payerIds` already included in `spaces` will not be fetched again.

> Note: If a payerId is associated with more than one payer space, the order in which they are returned should not be relied upon. If a specific payer space is required, you'll need to filter the list that is returned.

#### `children?: React.ReactNode | (spacesContext: SpacesContext) => ReactNode`

Children can be a react child or render prop.
