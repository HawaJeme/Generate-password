const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6","7", "8", "9"]

const symbols = ["`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const field = document.querySelector(".field");
const container = document.querySelector(".container")
const passLengthInput = document.getElementById("passLengthInput")
const passLengthVal = document.getElementById("passLengthVal")
const checkBox = document.getElementById("checkbox")
const generator = document.getElementById("generator")

let passwordLength = passLengthInput.value
passLengthVal.textContent = passwordLength

// Event listeners

generator.addEventListener("click", password)

passLengthInput.addEventListener("input", (e)=> {
    passLengthVal.textContent = e.target.value
    passwordLength = e.target.value
})

field.addEventListener("click", (e)=> {
    copyToClipboard(e)
})

// Functions

function randomIndex(){
    let index = ''
    let charsSymbols = [...characters, ...symbols]
    if(checkBox.checked){
        index = Math.floor(Math.random() * charsSymbols.length)
        return charsSymbols[index]
    } else {
        index = Math.floor(Math.random() * characters.length)
        return characters[index]
    }
}

function password(){
    let password = ""
    for(let i=0; i<passwordLength; i++){
        pass = randomIndex()
        password += pass
    }
    return field.textContent = password
}

function copyToClipboard(e){
    const text = e.target.textContent
    if(text !== '# PASSWORD'){
    navigator.clipboard.writeText(text)
        .then(() => {
            container.innerHTML += `<p id="copied">${text} copied to clipboard</p>`
            setTimeout(()=>{
                document.getElementById("copied").remove()
            }, 3000)
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    }
}