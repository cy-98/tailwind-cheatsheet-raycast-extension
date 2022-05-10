import { spacing, symbols, Titles, columns, rows } from "./types";

const Tailwind: Record<Titles, Record<string, { value: string; desc: string }>> = {
  [Titles.Breakpoints]: {
    sm: {
      desc: "Minimum width 640px",
      value: `@media (min-width: 640px) { ... }`,
    },
    md: {
      desc: "Minimum width 768px",
      value: `@media (min-width: 768px) { ... }`,
    },
    lg: {
      desc: "Minimum width 1024px",
      value: `@media (min-width: 1024px) { ... }`,
    },
    xl: {
      desc: "Minimum width 1280px",
      value: `@media (min-width: 1280px) { ... }`,
    },
    "2xl": {
      desc: "Minimum width 1536px",
      value: `@media (min-width: 1536px) { ... }`,
    },
  },
  [Titles.BoxDecorationBreak]: {
    "box-decoration-clone": {
      value: `box-decoration-break: clone;`,
      desc: "",
    },
    "box-decoration-slice": {
      value: "box-decoration-break: slice;",
      desc: "",
    },
  },
  [Titles.Container]: {
    container: {
      value: `container`,
      desc: `sm max-width: 640px; md max-width: 768px; lg	max-width: 1024px; xl	max-width: 1280px; 2xl	max-width: 1536px;`,
    },
  },
  [Titles.BoxSizing]: {
    "box-border": {
      value: `box-sizing: border-box;`,
      desc: "",
    },
    "box-content": {
      value: `box-sizing: content-box;`,
      desc: "",
    },
  },
  [Titles.Display]: {
    hidden: {
      value: `display: none;`,
      desc: "",
    },
    block: {
      value: `display: block;`,
      desc: "",
    },
    "inline-block": {
      value: `display: inline-block;`,
      desc: "",
    },
    inline: {
      value: `display: inline;`,
      desc: "",
    },
    flex: {
      value: `display: flex;`,
      desc: "",
    },
    "inline-flex": {
      value: `display: inline-flex;`,
      desc: "",
    },
    table: {
      value: `display: table;`,
      desc: "",
    },
    "inline-table": {
      value: `display: inline-table;`,
      desc: "",
    },
    "table-caption": {
      value: `display: table-caption;`,
      desc: "",
    },
    "table-cell": {
      value: `display: table-cell;`,
      desc: "",
    },
    "table-column": {
      value: `display: table-column;`,
      desc: "",
    },
    "table-column-group": {
      value: `display: table-column-group;`,
      desc: "",
    },
    "table-footer-group": {
      value: `display: table-footer-group;`,
      desc: "",
    },
    "table-header-group": {
      value: `display: table-header-group;`,
      desc: "",
    },
    "table-row": {
      value: `display: table-row;`,
      desc: "",
    },
    "table-row-group": {
      value: `display: table-row-group;`,
      desc: "",
    },
    "flow-root": {
      value: `display: flow-root;`,
      desc: "",
    },
    grid: {
      value: `display: grid;`,
      desc: "",
    },
    "inline-grid": {
      value: `display: inline-grid;`,
      desc: "",
    },
    contents: {
      value: `display: contents;`,
      desc: "",
    },
    "list-item": {
      value: `display: list-item;`,
      desc: "",
    },
  },
  [Titles.Float]: {
    "float-right": {
      value: "float: right;",
      desc: "",
    },
    "float-left": {
      value: "float: left;",
      desc: "",
    },
    "float-none": {
      value: "float: none;",
      desc: "",
    },
  },
  [Titles.Clear]: {
    "clear-right": {
      value: "clear: right;",
      desc: "",
    },
    "clear-left": {
      value: "clear: left;",
      desc: "",
    },
    "clear-both": {
      value: "clear: both;",
      desc: "",
    },
    "clear-none": {
      value: "clear: none;",
      desc: "",
    },
  },
  [Titles.Isolation]: {
    isolate: {
      value: "isolation: isolate;",
      desc: "",
    },
    "isolate-auto": {
      value: "isolation: auto;",
      desc: "",
    },
  },
  [Titles.ObjectFit]: {
    "object-cover": {
      value: "object-fit: cover;",
      desc: "",
    },
    "object-contain": {
      value: "object-fit: contain;",
      desc: "",
    },
    "object-fill": {
      value: "object-fit: fill;",
      desc: "",
    },
    "object-none": {
      value: "object-fit: none;",
      desc: "",
    },
    "object-scale-down": {
      value: "object-fit: scale-down;",
      desc: "",
    },
  },
  [Titles.ObjectPosition]: {
    "object-bottom": {
      value: "object-position: bottom;",
      desc: "",
    },
    "object-center": {
      value: "object-position: center;",
      desc: "",
    },
    "object-left": {
      value: "object-position: left;",
      desc: "",
    },
    "object-right": {
      value: "object-position: right;",
      desc: "",
    },
    "object-top": {
      value: "object-position: top;",
      desc: "",
    },
    "object-right-bottom": {
      value: "object-position: right bottom;",
      desc: "",
    },
    "object-right-top": {
      value: "object-position: right top;",
      desc: "",
    },
    "object-left-bottom": {
      value: "object-position: left bottom;",
      desc: "",
    },
    "object-left-top": {
      value: "object-position: left top;",
      desc: "",
    },
  },
  [Titles.Overflow]: {
    "overflow-auto": {
      value: "overflow: auto;",
      desc: "",
    },
    "overflow-hidden": {
      value: "overflow: hidden;",
      desc: "",
    },
    "overflow-scroll": {
      value: "overflow: scroll;",
      desc: "",
    },
    "overflow-visible": {
      value: "overflow: visible;",
      desc: "",
    },
    "overflow-x-auto": {
      value: "overflow-x: auto;",
      desc: "",
    },
    "overflow-x-hidden": {
      value: "overflow-x: hidden;",
      desc: "",
    },
    "overflow-x-scroll": {
      value: "overflow-x: scroll;",
      desc: "",
    },
    "overflow-x-visible": {
      value: "overflow-x: visible;",
      desc: "",
    },
    "overflow-y-auto": {
      value: "overflow-y: auto;",
      desc: "",
    },
    "overflow-y-hidden": {
      value: "overflow-y: hidden;",
      desc: "",
    },
    "overflow-y-scroll": {
      value: "overflow-y: scroll;",
      desc: "",
    },
    "overflow-y-visible": {
      value: "overflow-y: visible;",
      desc: "",
    },
  },
  [Titles.Overscroll]: {
    "overscroll-auto": {
      value: "overscroll-behavior: auto;",
      desc: "",
    },
    "overscroll-contain": {
      value: "overscroll-behavior: contain;",
      desc: "",
    },
    "overscroll-none": {
      value: "overscroll-behavior: none;",
      desc: "",
    },
    "overscroll-y-auto": {
      value: "overscroll-behavior-y: auto;",
      desc: "",
    },
    "overscroll-y-contain": {
      value: "overscroll-behavior-y: contain;",
      desc: "",
    },
    "overscroll-y-none": {
      value: "overscroll-behavior-y: none;",
      desc: "",
    },
    "overscroll-x-auto": {
      value: "overscroll-behavior-x: auto;",
      desc: "",
    },
    "overscroll-x-contain": {
      value: "overscroll-behavior-x: contain;",
      desc: "",
    },
    "overscroll-x-none": {
      value: "overscroll-behavior-x: none;",
      desc: "",
    },
  },
  [Titles.Position]: {
    static: {
      value: "position: static;",
      desc: "",
    },
    absolute: {
      value: "position: absolute;",
      desc: "",
    },
    fixed: {
      value: "position: fixed;",
      desc: "",
    },
    relative: {
      value: "position: relative;",
      desc: "",
    },
    sticky: {
      value: "position: sticky;",
      desc: "",
    },
  },
  [Titles.TopRightBottomLeft]: {},
  [Titles.Visibility]: {
    visible: {
      value: "visibility: visible;",
      desc: "",
    },
    invisible: {
      value: "visibility: hidden;",
      desc: "",
    },
  },
  [Titles.ZIndex]: {
    "z-0": {
      value: "z-index: 0;",
      desc: "",
    },
    "z-10": {
      value: "z-index: 10;",
      desc: "",
    },
    "z-20": {
      value: "z-index: 20;",
      desc: "",
    },
    "z-30": {
      value: "z-index: 30;",
      desc: "",
    },
    "z-40": {
      value: "z-index: 40;",
      desc: "",
    },
    "z-50": {
      value: "z-index: 50;",
      desc: "",
    },
    "z-auto": {
      value: "z-index: auto;",
      desc: "",
    },
  },
  [Titles.GridTemplateColumns]: {
    // map columns
    "grid-cols-none": {
      value: "grid-template-columns: none;",
      desc: "",
    },
  },
  [Titles.GridColumn]: {
    // map columns
    "col-auto": {
      value: "grid-column: auto;",
      desc: "",
    },
    "col-start-auto": {
      value: "grid-column-start: auto;",
      desc: "",
    },
    "col-end-auto": {
      value: "grid-column-end: auto;",
      desc: "",
    },
    "col-span-full": {
      value: "grid-column: 1 / -1;",
      desc: "",
    },
  },
  [Titles.GridTemplateRows]: {
    // map rows
    "grid-rows-none": {
      value: "grid-template-rows: none;",
      desc: "",
    },
  },
  [Titles.GridRow]: {
    // map rows
    "row-span-full": {
      value: "grid-row: 1 / -1;",
      desc: "",
    },
    "row-start-auto": {
      value: "grid-row-start: auto;",
      desc: "",
    },
    "row-end-auto": {
      value: "grid-row-end: auto;",
      desc: "",
    },
  },
  [Titles.GridAutoFlow]: {
    "grid-flow-row": {
      value: "grid-auto-flow: row;",
      desc: "",
    },
    "grid-flow-col": {
      value: "grid-auto-flow: column;",
      desc: "",
    },
    "grid-flow-row-dens": {
      value: "grid-auto-flow: row dense;",
      desc: "",
    },
    "grid-flow-col-dens": {
      value: "grid-auto-flow: column dense;",
      desc: "",
    },
  },
  [Titles.GridAutoColumns]: {
    "auto-cols-auto": {
      value: "grid-auto-columns: auto;",
      desc: "",
    },
    "auto-cols-min": {
      value: "grid-auto-columns: min-content;",
      desc: "",
    },
    "auto-cols-max": {
      value: "grid-auto-columns: max-content;",
      desc: "",
    },
    "auto-cols-fr": {
      value: "grid-auto-columns: minmax(0, 1fr);",
      desc: "",
    },
  },
  [Titles.GridAutoRows]: {
    "auto-rows-auto": {
      value: "grid-auto-rows: auto;",
      desc: "",
    },
    "auto-rows-min": {
      value: "grid-auto-rows: min-content;",
      desc: "",
    },
    "auto-rows-max": {
      value: "grid-auto-rows: max-content;",
      desc: "",
    },
    "auto-rows-fr": {
      value: "grid-auto-rows: minmax(0, 1fr);",
      desc: "",
    },
  },
  [Titles.Gap]: {
    // map spacing
    "gap-px": {
      value: "gap: 1px;",
      desc: "",
    },
  },
  [Titles.Padding]: {
    "-p-px": {
      value: "padding: -1px",
      desc: "",
    },
    "-pl-px": {
      value: "padding-left: -1px",
      desc: "",
    },
    "-pr-px": {
      value: "padding-right: -1px",
      desc: "",
    },
    "-pt-px": {
      value: "padding-top: -1px",
      desc: "",
    },
    "-pb-px": {
      value: "padding-bottom: -1px",
      desc: "",
    },
    "p-px": {
      value: "padding: 1px",
      desc: "",
    },
    "pl-px": {
      value: "padding-left: 1px",
      desc: "",
    },
    "pr-px": {
      value: "padding-right: 1px",
      desc: "",
    },
    "pt-px": {
      value: "padding-top: 1px",
      desc: "",
    },
    "pb-px": {
      value: "padding-bottom: 1px",
      desc: "",
    },
  },
  [Titles.Margin]: {
    "-m-px": {
      value: "margin: -1px",
      desc: "",
    },
    "-ml-px": {
      value: "margin-left: -1px",
      desc: "",
    },
    "-mr-px": {
      value: "margin-right: -1px",
      desc: "",
    },
    "-mt-px": {
      value: "margin-top: -1px",
      desc: "",
    },
    "-b-px": {
      value: "margin-bottom: -1px",
      desc: "",
    },
    "m-px": {
      value: "margin: 1px",
      desc: "",
    },
    "ml-px": {
      value: "margin-left: 1px",
      desc: "",
    },
    "mr-px": {
      value: "margin-right: 1px",
      desc: "",
    },
    "mt-px": {
      value: "margin-top: 1px",
      desc: "",
    },
    "mb-px": {
      value: "margin-bottom: 1px",
      desc: "",
    },
  },
  [Titles.SpaceBetween]: {
    "space-x-reverse > * + *": {
      value: "--tw-space-x-reverse: 1;",
      desc: "",
    },
    "space-y-reverse > * + *": {
      value: "--tw-space-y-reverse: 1;",
      desc: "",
    },
    "space-x-px > * + *": {
      value: "margin-left: 1px;",
      desc: "",
    },
    "space-y-px > * + *": {
      value: "margin-top: 1px;",
      desc: "",
    },
  },
};

// left top bottom right
spacing.forEach((space) => {
  const positions = Tailwind[Titles.TopRightBottomLeft];

  positions[`inset-${space}`] = {
    value: `top: ${space}rem; right: ${space}rem; bottom: ${space}rem; left: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`inset-x-${space}`] = {
    value: `top: ${space}rem; right: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`inset-y-${space}`] = {
    value: `top: ${space}rem; bottom: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`top-${space}`] = {
    value: `top: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`right-${space}`] = {
    value: `right: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`bottom-${space}`] = {
    value: `bottom: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
  positions[`left-${space}`] = {
    value: `left: ${space}rem;`,
    desc: ` ${space * 4}px `,
  };
});

// left top bottom right
symbols.forEach((space) => {
  const { key, v, desc = "" } = space;
  const positions = Tailwind[Titles.TopRightBottomLeft];

  positions[`inset-${key}`] = {
    value: `top: ${v}; right: ${v}; bottom: ${v}; left: ${v};`,
    desc,
  };
  positions[`inset-x-${key}`] = {
    value: `top: ${v}; right: ${v};`,
    desc,
  };
  positions[`inset-y-${key}`] = {
    value: `top: ${v}; bottom: ${v};`,
    desc,
  };
  positions[`top-${key}`] = {
    value: `top: ${v};`,
    desc,
  };
  positions[`right-${key}`] = {
    value: `right: ${v};`,
    desc,
  };
  positions[`bottom-${key}`] = {
    value: `bottom: ${v};`,
    desc,
  };
  positions[`left-${key}`] = {
    value: `left: ${v};`,
    desc,
  };
});

// grid-template-columns
columns.forEach((n) => {
  Tailwind[Titles.GridTemplateColumns][`grid-col-${n}`] = {
    value: `grid-template-columns: repeat(${n}, minmax(0, 1fr));`,
    desc: "",
  };
});

[...columns, 13].forEach((n) => {
  Tailwind[Titles.GridColumn][`col-start-${n}`] = {
    value: `grid-column-start: ${n};`,
    desc: "",
  };
  Tailwind[Titles.GridColumn][`col-end-${n}`] = {
    value: `grid-column-end: ${n};`,
    desc: "",
  };
  Tailwind[Titles.GridColumn][`col-span-${n}`] = {
    value: `grid-column: span ${n} / span ${n};`,
    desc: "",
  };
  delete Tailwind[Titles.GridColumn][`col-span-${13}`];
});

// grid-template-rows
rows.forEach((n) => {
  Tailwind[Titles.GridTemplateRows][`grid-rows-${n}`] = {
    value: `grid-template-rows: repeat(${n}, minmax(0, 1fr));`,
    desc: "",
  };
});

// grid-row, start/end
[...rows, 7].forEach((n) => {
  Tailwind[Titles.GridRow][`row-start-${n}`] = {
    value: `grid-row-start: ${n};`,
    desc: "",
  };
  Tailwind[Titles.GridRow][`row-end-${n}`] = {
    value: `grid-row-end: ${n};`,
    desc: "",
  };
  Tailwind[Titles.GridRow][`row-span-${n}`] = {
    value: `grid-row: ${n};`,
    desc: "",
  };
  delete Tailwind[Titles.GridRow][`row-span-${7}`];
});

// gap
spacing.forEach((n) => {
  Tailwind[Titles.Gap][`gap-${n}`] = {
    value: `gap: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Gap][`gap-x-${n}`] = {
    value: `columns-gap: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Gap][`gap-y-${n}`] = {
    value: `rows-gap: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
});

// gap
symbols
  .filter(({ desc }) => Boolean(desc))
  .forEach(({ v, desc = "", key }) => {
    Tailwind[Titles.Gap][`gap-${key}`] = {
      value: `gap: ${v};`,
      desc,
    };
    Tailwind[Titles.Gap][`gap-x-${key}`] = {
      value: `column-gap: ${v};`,
      desc,
    };
    Tailwind[Titles.Gap][`gap-y-${key}`] = {
      value: `row-gap: ${v};`,
      desc,
    };
  });

// padding
spacing.forEach((n) => {
  Tailwind[Titles.Padding][`p-${n}`] = {
    value: `padding: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-p-${n}`] = {
    value: `padding: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`px-${n}`] = {
    value: `padding-left: ${n}rem; padding-right: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-px-${n}`] = {
    value: `padding-left: -${n}rem; padding-right: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`py-${n}`] = {
    value: `padding-top: ${n}rem; padding-bottom: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-py-${n}`] = {
    value: `padding-top: -${n}rem; padding-bottom: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`pt-${n}`] = {
    value: `padding-top: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-pt-${n}`] = {
    value: `padding-top: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`pb-${n}`] = {
    value: `padding-bottom: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-pb-${n}`] = {
    value: `padding-bottom: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`pl-${n}`] = {
    value: `padding-left: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-pl-${n}`] = {
    value: `padding-left: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Padding][`pr-${n}`] = {
    value: `padding-right: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Padding][`-pr-${n}`] = {
    value: `padding-right: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };
});

// padding
symbols
  .filter(({ desc }) => Boolean(desc))
  .forEach(({ v, desc = "", key }) => {
    Tailwind[Titles.Padding][`p-${key}`] = {
      value: `padding: ${v};`,
      desc,
    };
    Tailwind[Titles.Padding][`-p-${key}`] = {
      value: `padding: -${v};`,
      desc,
    };
    Tailwind[Titles.Padding][`-pt-${key}`] = {
      value: `padding: -${v};`,
      desc,
    };
    Tailwind[Titles.Padding][`-pb-${key}`] = {
      value: `padding: -${v};`,
      desc,
    };
  });

// margin
spacing.forEach((n) => {
  Tailwind[Titles.Margin][`m-${n}`] = {
    value: `margin: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-m-${n}`] = {
    value: `margin: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`mx-${n}`] = {
    value: `margin-left: ${n}rem; margin-right: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-mx-${n}`] = {
    value: `margin-left: -${n}rem; margin-right: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`my-${n}`] = {
    value: `margin-top: ${n}rem; margin-bottom: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-my-${n}`] = {
    value: `margin-top: -${n}rem; margin-bottom: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`mt-${n}`] = {
    value: `margin-top: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-mt-${n}`] = {
    value: `margin-top: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`mb-${n}`] = {
    value: `margin-bottom: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-mb-${n}`] = {
    value: `margin-bottom: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`ml-${n}`] = {
    value: `margin-left: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-ml-${n}`] = {
    value: `margin-left: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };

  Tailwind[Titles.Margin][`mr-${n}`] = {
    value: `margin-right: ${n}rem;`,
    desc: ` ${n * 4}px `,
  };
  Tailwind[Titles.Margin][`-mr-${n}`] = {
    value: `margin-right: -${n}rem;`,
    desc: ` -${n * 4}px `,
  };
});
symbols
  .filter(({ desc }) => Boolean(desc))
  .forEach(({ v, desc = "", key }) => {
    Tailwind[Titles.Margin][`m-${key}`] = {
      value: `margin: ${v};`,
      desc,
    };
    Tailwind[Titles.Margin][`-m-${key}`] = {
      value: `margin: -${v};`,
      desc,
    };
    Tailwind[Titles.Margin][`-mt-${key}`] = {
      value: `margin: -${v};`,
      desc,
    };
    Tailwind[Titles.Margin][`-mb-${key}`] = {
      value: `margin: -${v};`,
      desc,
    };
  });

// space between
spacing.forEach((n) => {
  Tailwind[Titles.SpaceBetween][`space-x-${n}`] = {
    value: `margin-left: ${n}rem`,
    desc: `.space-x-${n} > * + * { margin-left: ${n}rem /* ${n}px */ } `,
  };
  Tailwind[Titles.SpaceBetween][`space-y-${n}`] = {
    value: `margin-top: ${n}rem`,
    desc: `.space-y-${n} > * + * { margin-top: ${n}rem /* ${n}px */ } `,
  };
});

symbols
  .filter(({ desc }) => Boolean(desc))
  .forEach(({ key, v, desc = "" }) => {
    Tailwind[Titles.SpaceBetween][`space-x-${key}`] = {
      value: v,
      desc,
    };
  });

export default Tailwind;
