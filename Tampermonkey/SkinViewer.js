// ==UserScript==
// @name         SkinViewer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://kirka.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kirka.io
// @grant        none
// ==/UserScript==

//Find the code at https://www.toptal.com/developers/keycode (event.key)
let keybind = "m"
//Find the code at https://www.toptal.com/developers/keycode (event.key)

let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/SheriffCarry/KirkaScripts/main/Running%20Code/SkinViewer.js")
    text = await response.text();
    eval(text)
}
start()
