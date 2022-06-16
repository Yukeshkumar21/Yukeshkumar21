let saveUl = document.getElementById("save-ul")
let countUl = document.getElementById("count-ul")
let count = 0

function increment(){
    count +=1
    countUl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveUl.textContent += countStr
    countUl.textContent = 0
    count = 0
}