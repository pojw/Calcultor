function add(a){

const display=document.querySelector("#display")

display.textContent+=a
}
function deleteAll(){

    const display=document.querySelector("#display")
    
    display.textContent=""
    }

function Delete_one(){
    const display= document.querySelector("#display")
    let word=display.textContent

    let split_word=word.split("")
    split_word.pop()
   split_word= split_word.join("")
    display.textContent=split_word}