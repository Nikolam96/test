var nizza = ["https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB","https://shorturl.at/knoAB"]

var div = document.createElement("div")
var img = document.createElement("img")
var main = document.querySelector("main")
var btn = document.querySelector(".btn")
var btn2 = document.querySelector(".btn-2")

btn.addEventListener("click",e=>{
    e.preventDefault();
    document.body.appendChil(div)
    nizza.forEach(element =>{
        main.appendChild(div)
    })
})