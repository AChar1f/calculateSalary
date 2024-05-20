
function calcsal() {
    let SalaryWindow = document.getElementById("SalaryWindow")
    let sal = document.getElementById("sal").value 
    let hrs = document.getElementById("hrs").value 
    let ans = eval(+sal * +hrs)
        SalaryWindow.value = (`Hi.  Your salary is R${ans}`)

}