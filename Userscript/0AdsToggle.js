//Find the code at https://www.toptal.com/developers/keycode (event.key)
let key = ""
//Find the code at https://www.toptal.com/developers/keycode (event.key)


let response
let text
async function start() {
    response = await fetch("https://raw.githubusercontent.com/SheriffCarry/KirkaScripts/main/Running%20Code/0AdsToggle.js")
    text = await response.text();
    eval(text)
}
start()
