# Daily Challenge React template
This repo is a template react project made to streamline the process of creating visuals for daily challenge takeup with students!

## Functional Setup
In order to get this template up and running all you need to do is update the challenge.json with information about whichever whiteboarding challenge you are doing with students!

### JSON structure
The challenge.json folder has 4 properties!
#### title
Title is a string representing the name of your challenge! It will be used to render an h1 onto the page.
#### description
description is a string containing the description / instructions for your daily challenge! It will be used to render a p tag onto the page.
#### hasMultipleArgs
hasMultipleArgs is a boolean value used to determine how the testcases will be sent to the solution functions. Set this to true if the function is expected to receive more than one argument from a single testcase.
#### testcases
testcases is an array of object used to represent what input you will provide and what output you expect student solutions to return.
##### input
input can be whatever datatype you need it to be in order to test student solutions. However, if you need to provide multiple arguments you must provide an array of arguments to input and set hasMultipleArgs to true. If your challenge requires a challenge that takes a single array as its only argument, simply provide said array to the input property and set hasMultipleArgs to false.
##### output
The output property is used to describe what the desired output of a correct solution function will be. Data type can be any and I would encourage you to match it to the expected output, but it will eventually be stringified for comparison purposes. Side note: you'll want to double check that students are returning the correct datatype from their function since the stringified comparison will not effectively compare type.

### Writing and testing student functions
Simply type student solutions (or any example solutions) into the solution-functions.js file, located in the folder of the same name. You can test the student functions and display the results on the React App by simply clicking on the button for the solution you want to test! This will print the input, expected output, and returned result with a green checkmark ✅ if the result matches the expected output or a red X ❌ if it does not match. Consider setting up a test solution before using this template in class for the first time, just to ensure the JSON is properly configured.

## Visual setup
The project has some default styling provided but feel free to add your own flair! There are three color variables that can be used to quickly change the linear-gradient background and font color in the _colors.scss partial. Some default styles for font-family have been left in index.scss, and the body tag has some additional styles in index.scss as well, if you wish to restyle the background entirely.