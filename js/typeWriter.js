const letter = document.getElementById("letter")

let wordTurn = 0
let charTurn = 0

let words = ["обро пожаловать на мой небольшой, но уютный сайт. Здесь вы можете оценить мой сайт и ознакомиться с моими данными читая мои блоги:)"]

function printWord(){
    if(charTurn <= words[wordTurn].length){
        let str = words[wordTurn].substring(0, charTurn)
        letter.innerHTML = `Д${str}`
        charTurn++
        setTimeout(printWord, 100)
    }
    else{
        setTimeout(deleteWord, 700)
    }
}

function deleteWord(){
    if(charTurn >= 0){
        let str = words[wordTurn].substring(0, charTurn)
        letter.innerHTML = `Д${str}`
        charTurn--
        setTimeout(deleteWord, 50)
    }
    else{
        charTurn++
        if(charTurn >= words.length){
            charTurn = 0
        }
        setTimeout(printWord, 100)
    }
}

printWord()
