var smartgrid = require("smart-grid");
const path = require('path')

var settings = {
  outputStyle: "scss" /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: "16px" /* gutter width px || % || rem */,
  mobileFirst: false /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: "1232px" /* max-width оn very large screen */,
    fields: "24px" /* side fields */,
  },
  breakPoints: {
    sm: {
      width: "576px",
      fields: "8px"
    },
    md: {
      width: "768px",
      fields: "16px" /* side fields */,
    },
    lg: {
      width: "1024px",
      fields: "24px" /* side fields */,
    },
    /*
        We can create any quantity of break points.

        some_name: {
            width: 'Npx',
            fields: 'N(px|%|rem)',
            offset: 'N(px|%|rem)'
        }
        */
  },
};

smartgrid('./src/styles/grid', settings);

//for setup #node ./src/grid-config/smart-grid-config.js
