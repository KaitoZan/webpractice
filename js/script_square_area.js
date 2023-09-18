let btnSum = document.getElementById("btn-sum")
let btnCancel = document.getElementById("btn-cancel")
let showSum = document.getElementById("show-sum")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

btnSum.addEventListener( "click" , function () {
    //alert("Congrats")    
    let sum = parseFloat(num1.value) * parseFloat(num2.value)
    showSum.innerHTML =  sum 
} )
btnCancel.addEventListener( "click" , function () {
    //alert("Congrats") 
    num1.value =""
    num2.value = ""
    showSum.innerHTML = "0.00"
})

