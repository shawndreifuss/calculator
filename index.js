const answerEl = document.querySelector('.answer')
let answer = "|"
 
// answerEl.textContent = answer





function display(val){

    document.querySelector('.answer').textContent += val

    return val

}


function solve(){

    let x =  document.querySelector('.answer').textContent

    let y = eval(x);

    document.querySelector('.answer').textContent = y

    return y

}

function clearScreen() {
    let clear = document.querySelector('.answer').textContent = " "
}