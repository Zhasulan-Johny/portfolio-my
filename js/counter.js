const numbers = document.querySelectorAll(".stat-num")

numbers.forEach((num) =>{
    num.innerHTML = 0
    function changeNum(){
        let finalRes = +(num.getAttribute("data-num"))
        let increment = Math.ceil(finalRes/200)
        let value = +num.innerHTML
        if(value < finalRes){
            value += increment
            num.innerHTML = value
            setTimeout(changeNum, 100)
        }else{
            num.innerHTML = finalRes
        }
    }
    changeNum()
})