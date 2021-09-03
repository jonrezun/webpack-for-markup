#Cool webpack boilerplate fro marckup + VUE

---

- PUG
- Generating dynamic paths for images
- Static files
- SCSS
- PostCSS
- SmartGrid CSS
- BABEL
- VUE, VUE ROUTERS

## GET STARTED

```
npm install
npm run start
```

#### FOR production

```
npm run build
```

## File stucture

├── congig #webpack configs file
└── common.js #common commands
└── dev.js #commands for development
└── prod.js #commands for development
└── vue.js #commands for vue files
└── paths.js #basic paths

├── src # main files
├── html/ # html - pug files: pages layout, partials
└── layouts/ # layout: head, header, footer
└── components/ # pug components
└── pages/ # pages. For creating new pages just create new file. Page URL = fileName.html
└── images/ # all images
├── js/ # js files
└── libs/ # js libraries, which unable to connect using NPM
└── index.js # entry file
└── styles/ # scss files
└── components/ # styles fro components
└── plugins/ # custom styles for plugins
└── reset/ # reset.scss
└── static/ # staic styles (variables, typography and etc)
└── template/ # loyout styles
└── grid/ # SmartGrid mixins for grid CSS
└── main.scss # import scss
├── vue # folder for vue projects
