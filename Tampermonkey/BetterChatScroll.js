// ==UserScript==
// @name         BetterChatScroll
// @namespace    http://tampermonkey.net/
// @version      0.1
// @author       CarrySheriff#4911 - github.com/SheriffCarry
// @match        *://kirka.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kirka.io
// @grant        none
// ==/UserScript==

let scrollspeed = 10;


let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/SheriffCarry/KirkaScripts/main/Running%20Code/BetterChatScroll.js")
    text = await response.text();
    eval(text)
}
start()
