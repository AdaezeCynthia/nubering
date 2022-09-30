let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)

console.log(saveEl)
let count = 0

function increment(){
count = count + 1
countEl.innerText =count
console.log(count)
}

function save(){
    console.log(count)
    let countStr = count +" - "
 saveEl.innerText += countStr 
countEl.innerText = 0 
count = 0

}    

