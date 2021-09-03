# Cool webpack boilerplate for markup + VUE

- :white_check_mark: PUG
- :white_check_mark: Generating dynamic paths for images
- :white_check_mark: Static files
- :white_check_mark: SCSS
- :white_check_mark: PostCSS
- :white_check_mark: SmartGrid CSS
- :white_check_mark: BABEL
- :white_check_mark: VUE, VUE ROUTERS

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

- **configs** - webpack configs files

  - **common.js** - common commands
  - **dev.js** - commands for development
  - **prod.js** - commands for development
  - **vue.js** - commands for vue files
  - **paths.js** - basic paths

- **src** - main files

  - **html/** - html - pug files: pages layout, partials

    - **layouts/** - layout: head, header, footer
    - **components/** - pug components
    - **pages/** - pages. For creating new pages just create new file. Page URL = fileName.html

  - **images/** - all images

  - **js/** - js files

    - **libs/** - js libraries, which unable to connect using NPM
    - **index.js** - entry file

  - **styles/** - scss files

    - **components/** - styles fro components
    - **plugins/** - custom styles for plugins
    - **reset/** - reset.scss
    - **static/** - staic styles (variables, typography and etc)
    - **template/** - layout styles
    - **grid/** - SmartGrid mixins for grid CSS
    - **main.scss** - import scss

  - **vue** - folder for vue projects
