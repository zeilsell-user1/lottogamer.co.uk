# sliding-drawer-component

this is a simple sliding drawer component to be used in react/next projects

The dra2w slides in from the left and occupies 40% of the creen. The The component is invoked with an array of Item. Each Item is a top level menu item. Each menu have an optional link, and an optional list of Subitems. These are mutally exclusive, there is either a link or a set of subitems but not both. There could be neither, but that would be a pretty useless accordion!

The component used rollup to create the library. A bneer of 'use client' is added to be compatible with the latest nextjs release.

As of 22/Jan/2023 it was not possible to used styled-compinents in the library as they break going through the rollup process.
