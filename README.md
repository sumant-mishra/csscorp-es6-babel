# Training Session 1: ES6 and Bable Training
 
 ## Topics Covered
⋅⋅* var, let and const
⋅⋅* Template-String
⋅⋅* Arrow function
⋅⋅* Array
⋅⋅* Spread Operator
⋅⋅* Object
⋅⋅* Iterators
⋅⋅* Class
⋅⋅* Import and Export a class or variables

 ## Install NodeJS and npm
 Check if NodeJS and npm is installed in the system or not by running below commands
 node --version
 npm --version
 
 If above command does not print node version and npm version or throws errors like command not found, install node and npm from nodejs.org site.

## Project creation
Create a project folder (babel-es6 in my case)

Open that project folder in Visual Studio code

Open Terminal in Commnad prompt or in Visual Studio Code


## package.json
Create package.json using npm init (or npm init --force)

## Install Babel as Dev dependency
npm install -D babel-cli

## Install env preset
npm install -D babel-preset-env

## .babelrc file
Create .babelrc file and add following code and save the file
{
  "presets": ["env"]
}

## Create script to run build
Update the script object in package.json as below:
...
  "scripts": {
    "build": "babel src -d build && node ./build/main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...

## Build and run your code from main.js file
Now run the below command to compile and run your ES6 code:
npm run build

## Run code from other files
Above command will compile all es6 .js files and produce new code in build folder with the respective names
To run the code in a particular file run the below commands (can be used any file name in place of template-string.js)
node ./build/template-string.js
