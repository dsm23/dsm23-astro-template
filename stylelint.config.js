const config = {
  extends: ["stylelint-config-html/astro", "stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      {
        properties: [
          "display",
          "z-index",
          "position",
          "top",
          "right",
          "bottom",
          "left",
        ],
      },
      {
        properties: ["visibility", "float", "clear"],
      },
      {
        properties: [
          "flex",
          "flex-direction",
          "flex-wrap",
          "flex-flow",
          "flex-basis",
          "flex-grow",
          "flex-shrink",
          "align-items",
          "justify-content",
          "align-self",
          "order",
        ],
      },
      {
        properties: [
          "width",
          "min-width",
          "max-width",
          "height",
          "min-height",
          "max-height",
        ],
      },
    ],
  },
};

export default config;
