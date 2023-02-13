const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6","7", "8", "9",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const field = document.querySelector(".field");
let clickFifteen = false;
let clickEight = true;

function randomIndex(){
    index = Math.floor(Math.random() *characters.length)
    return characters[index]
}

function onclick15(){
    clickFifteen = true;
    clickEight = false;
    return generatorEight()
}

function generatorFifteen(){
    let password = ""
    for(let i=0; i<15; i++){
        pass = randomIndex()
        password += pass
    }
    return password
}

function onclick8(){
    clickEight = true;
    clickFifteen = false;
    return generatorEight()
}

function generatorEight(){
    let password = ""
    for(let i=0; i<8; i++){
        pass = randomIndex()
        password += pass
    }
    return password
}

function password(){
    let genFifteen = generatorFifteen()
    let genEight = generatorEight()
if(clickFifteen){
    return field.textContent = genFifteen
} else if(clickEight){
    return field.textContent = genEight
}
}
