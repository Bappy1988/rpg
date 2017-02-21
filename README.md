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
 
 ## Project Structure
  ### Client
   #### App
   #### Components
   #### Routing
   #### Theming
  ### Server
   The server is a simple express server providing some API endpoints and serving the generated bundles / css.  
   Any files under `api` ending in `.route.js` are included automatically, allowing endpoints to be split into multiple files
  ### Tests

 ## Build System
  The project is built using Webpack 2 and can be built in development or production mode  
  All output files are placed in the `dist` folder
  ### Development Mode
   `npm run build.dev`  
   Generates a single artifact with the css bundled into it. Source maps are included and it is not minified.  
   Note: This bundle will be big (about 9mb) - therefore it should _not_ be used in production.
  ### Production Mode
   `npm run build.prod`  
   Generates a javascript bundle and a css bundle. Source maps are not included and it is minified.  
   This will also run the test suite and will abort if any tests fail.  
   Note: This bundle will be compact (about 600kb javascript + 120kb css), but debugging will be impossible so it should not be used for local development.  
  ### Testing
   `npm run test`
   Runs all the tests in the `tests` folder and displays the results, followed by a coverage report  
   This can be run manually, but is also run when doing a production build
  
