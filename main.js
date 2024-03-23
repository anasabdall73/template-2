let ul = document.getElementById("ul")
let p = document.getElementById("p")
let cls = document.getElementById("close")
let li = document.getElementById("li")
let s1 = document.getElementById("s1")
let k2 = document.getElementById("k2")
let li3 = document.getElementById("li3")
let a = document.getElementById("a")
let a1 = document.getElementById("a")
let a2 = document.getElementById("a")


p.onclick = () => {
    ul.style.top = "30px"
    ul.style.zIndex = "1"
}

cls.onclick = () => {
    ul.style.top = "-150px"
    ul.style.zIndex = "-1"
    ul.style.transition = "0.3s"
}
