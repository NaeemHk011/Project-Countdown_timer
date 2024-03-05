#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var inquirer_1 = require("inquirer");
var res = await inquirer_1.default.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter the amount of second :",
    validate: function (input) {
        if (isNaN(input)) {
            return "Please enter valid number";
        }
        else if (input > 60) {
            return "Second must be in 60";
        }
        else {
            return true;
        }
    }
});
function timer(val) {
    var initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    var intervalTime = new Date(initialTime);
    setInterval(function () {
        var currentTime = new Date();
        var timeDiff = (0, date_fns_1.differenceInSeconds)(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired");
            process.exit();
        }
        var minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        var second = Math.floor(timeDiff % 60);
        console.log("".concat(minute.toString().padStart(2, "0"), " : ").concat(second.toString().padStart(2, "0")));
    }, 1000);
}
timer(res.userInput);
