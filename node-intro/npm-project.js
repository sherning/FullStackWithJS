// - - - - - - - - - - - - - LESSON OBJECTIVES - - - - - - - - - - - - - //
//
// 1. Learn to install packages using npm command
// 2. Learn to find packages that I need from https://www.npmjs.com/
// 3. Learn to import and user packages in my scripts
// 4. Learn to initialise and modify package.json "type" property
//
// - - - - - - - - - - - - - LESSON OBJECTIVES - - - - - - - - - - - - - //


// npm init -> to create json package
// npm install <something>
// npm i sillyname

// config the package.json -> "type": "module" before using import
// const generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";

const sillyName = generateName();
console.log(`My name is ${sillyName}.`);

const superHeroName = superheroes.random();
console.log(`My super hero name is ${superHeroName}.`);
