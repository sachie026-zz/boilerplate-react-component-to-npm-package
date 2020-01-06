# boilerplate-react-component-to-npm-package

### Installation

Clone or download the repo. 
Update file and folder names to your desired names 

### Build your React Component
Run `npm install` from the command line inside your project folder, this installs all of the package dependencies for the project.

Run `npm run build or yarn run build` from the command line inside your project folder, this will run webpack via the "scripts > build" script in the package.json file above, when it's finished you should see the compiled ES5 version of your React component in the lib folder inside your project folder.


### Login to the npm registry with the npm cli
Run `npm login` from the command line and enter the credentials that you used to sign up to npmjs.com.


### Publish your React component to npm!
Run `npm publish` from the command line inside your project folder.

Now go and check out your new React component on the npm website at https://www.npmjs.com/package/[YOUR PACKAGE NAME]. You can also run npm info [YOUR PACKAGE NAME] from the command line to see all the metadata info about your package that's stored on the npm registry.

NOTE: To update your package in npm you just need to increment the version number in the package.json file. Then run `npm run build or yarn run build` followed by `npm publish` again.