'use strict'

// Functions in JavaScript


let lightSwitch = -1;
console.log(togleSwitch(lightSwitch));

function togleSwitch(lightSwitch) {
    let sw = lightSwitch
    if (sw === true) {
        return "Light is on";
    } else if (sw === false) {
        return "Light is off";
    } else {
        return "There is a power outage in your area.";
    }
}