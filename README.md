# React Starter
 Quick start react template to speed up development  
 Set up:
 * React
 * Redux
 * React Toolbox (for Material UI components)
 * Unit Tests (with Jest)
 
## Getting Started
 1. Clone the project
 2. Run `npm install`
 3. Run `npm run build.dev`
 4. Run `npm start`
 5. Navigate to [localhost:9001](http://localhost:9001)

## Client Structure
  ### App  
   The app root (`client/app/index.jsx`) sets up the root of the application (container and child routes).  
   No logic should be present here; just the initialisation of the app.  
  ### Components  
   Components are located under the `components` folder and are [standard React components](https://facebook.github.io/react/docs/react-component.html).  
   Where possible, the components should use local state rather than redux store.  
   Any components that need access to the redux store can do so with `connect`
  ### Routing  
   Routing is done with `react-router` in combination with `react-router-redux` to sync the routing with the store.  
   Routes are defined in `routes.js` and utilize `react-router`'s nested route functionality to allow for a container around the displayed component(s).  
   Using `react-router-redux` also allows for routing within actions, for example routing back to the login page on session timeout.  
   See [the docs](https://github.com/reactjs/react-router-redux) for more details.  
  ### Theming
   `react-toolbox` provides most of the styles for [Material Design](https://material.io/guidelines/) out of the box, so the only customization necessary should be colours.  
   Overrides for colours are in `theme/overrides.css` and should be enough for customizing the majority of the site.  
   Global site styles are in `theme/theme.scss` and can be used for non-component-specific things.  
   See [React Toolbox Components](http://react-toolbox.com/#/components) for more information on individual components  
   Developer notes are also included in `themes/overrides.css`  
  ### Tests
   Tests are located under the `tests` folder and are largely up to the developer to write.  
   They are executed using `jest`, which will detect and run them automatically and provide a coverage report.  
   They can be run manually with `npm run test`, but are also run with each production build.  
## Server Structure
 The server is a simple express server providing some API endpoints and serving the generated bundles / css.  
 Any files under `api` ending in `.route.js` are included automatically, allowing endpoints to be split into multiple files  
 The server compresses all responses with gzip compression.  
## Build System
 The project is built using Webpack 2 and can be built in development or production mode  
 All output files are placed in the `dist` folder
 ### Development Mode
  `npm run build.dev`  
  Generates a single artifact with the css bundled into it. Source maps are included and it is not minified.  
  Note: This bundle will be big (about 9mb) - therefore it should _not_ be used in production.
 ### Production Mode
  `npm run build.prod`  
  Generates two javascript bundles (app and vendor) and a css bundle. Source maps are not included and it is minified.  
  The app bundle contains the code related to the application, while the vendor bundle contains all of the supporting libraries.  
  This will also run the test suite and will abort if any tests fail.  
  Note: This bundle will be compact (about 600kb javascript + 120kb css), but debugging will be impossible so it should not be used for local development.  
  ### Testing
  `npm run test`  
  Runs all the tests in the `tests` folder and displays the results, followed by a coverage report  
  This can be run manually, but is also run when doing a production build
## Technical Details
 ### Build Process
 * `package.json` contains the build scripts
 * `build.dev` runs webpack using config `webpack.dev.js`, which builds a single artifact
   * JS is not minified and source maps are included
   * CSS toolchain is sass-loader -> postcss-loader -> css->loader -> style-loader
 * `build.prod` runs webpack using `webpack.prod.js`, which builds chunked JS and CSS
   * JS is minified and source maps are not included
   * Vendor (3rd party) code is split into a separate JS file  
   * CSS toolchain is sass-loader -> postcss-loader -> css-loader -> extract-text-webpack-plugin -> bundle.prod.css
