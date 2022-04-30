# Daily Challenge React template
## About
This repo is a template react project made to streamline the process of creating visuals for daily challenge takeup with students!

### Functional Setup
In order to get this template up and running all you need to do is update the challenge.json with information about whichever whiteboarding challenge you are doing with students!

#### JSON structure
The challenge.json folder has 4 properties!
##### title
Title is a string representing the name of your challenge! It will be used to render an h1 onto the page.
##### description
description is a string containing the description / instructions for your daily challenge! It will be used to render a p tag onto the page.
##### hasMultipleArgs
hasMultipleArgs is a boolean value used to determine how the testcases will be sent to the solution functions. Set this to true if the function is expected to receive more than one argument from a single testcase.
##### testcases
testcases is an array of object used to represent what input you will provide and what output you expect student solutions to return.
###### 