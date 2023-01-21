function add(a){

const display=document.querySelector("#display")

display.textContent+=a
if(one_opertion){
    second_number=true
}

}
function deleteAll(){

    const display=document.querySelector("#display")
    
    display.textContent=""
    Period=false
    one_opertion=false
    second_number=false
    }

function Delete_one(){
    const display= document.querySelector("#display")
    let word=display.textContent

    let split_word=word.split("")
    split_word.pop()
   split_word= split_word.join("")
    display.textContent=split_word}
function period(a){
    if(Period==false){
        const display=document.querySelector("#display")

        display.textContent+=a
        Period=true 
    }
}

function equal(){
    const display = document.querySelector("#display")
    let word = display.textContent;
    let split=word.split(" ")
    
    if(second_number){
    if(split[1]=="+"){
        display.textContent=Number(split[0])+Number(split[2])
 
    }
    else if (split[1]=="*"){
        display.textContent=Number(split[0])*Number(split[2])

    }
    else if (split[1]=="-"){
        display.textContent=(Number(split[0])-Number(split[2])).toFixed(3)

    } 
    else if (split[1]=="/"){
        display.textContent=(Number(split[0])/Number(split[2])).toFixed(3)

    }
}
}
let one_opertion=false
let second_number=false
let Period= false
function operations(a){
    Period=false
    if(one_opertion==false){
    const display=document.querySelector("#display")

    display.textContent+=a
     }
    
    if(one_opertion==true){
        equal()
        const display=document.querySelector("#display")

        display.textContent+=a
    }
    one_opertion=true


}

