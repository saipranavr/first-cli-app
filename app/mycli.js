#!/usr/bin/env node

//import all the functions
let help = require("./commands/help");
let organise = require("./commands/organise");
let view = require("./commands/view");

//Take inputs
let input = process.argv.slice(2);
let command = input[0];

switch(command)
{
    case "view":
        view.fn(input[1],input[2]);
        break;
    case "organise":
        organise.fn(input[1]);
        break;
    case "help":
        help.fn();
        break;
    default:
        console.log("Command not recognised. Enter --help for all the commands");
        break;
}

