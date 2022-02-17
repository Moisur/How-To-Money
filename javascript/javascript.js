// input value function 
function input(inputid){
    const inputNumber = document.getElementById(inputid);
    const inputNumbervalue =parseFloat(inputNumber.value);
    inputNumber.value ='';
    return inputNumbervalue;
}
//  calculate function
function calculate(){
    const inputvalue =input("income");
    const Foodvalue =input("food");
    const Redvalue =input("red");
    const Chothervalue =input("chother");
    // Total Expenses
    const Expenses =(Foodvalue+Redvalue+Chothervalue);
    //  calculate Erro handling
    if(inputvalue > 0 || Foodvalue > 0 || Redvalue > 0 || Chothervalue > 0 ){
        if(inputvalue> Expenses){
            const TotalExpenses = document.getElementById("total-expenses").innerText = Expenses;
            document.getElementById("total-Balance").innerText = inputvalue-TotalExpenses
        }
        else{
            alert("sorry, Income Must be big")
        }
    }
    else if(isNaN(inputvalue) || isNaN(Foodvalue) || isNaN(Redvalue)|| isNaN(Chothervalue)){
        alert("Please positive number")
    }       
}








//  calculate
// function input(inputid){
//     const inputNumber = document.getElementById(inputid);
//     const inputNumbervalue = parseFloat(inputNumber.value);
//     // inputNumber.value ='';
//     return inputNumbervalue;
// }
// function input(){
//     const inputNumber = document.getElementById("incam-value");
//     return inputNumber;
// }
// function calculate(){
//     const inputvalue =input("incam-value");
//     // const Foodvalue =input("Food");
//     // const Redvalue =input("Red");
//     // const Chothervalue =input("Chother");
//     // const Expenses =Foodvalue+Redvalue+Chothervalue;
//     console.log(inputvalue)
    // if(inputvalue > 0 || Foodvalue > 0 || Redvalue > 0 || Chothervalue > 0 ){
    //     if(inputvalue> Expenses){
    //         const TotalExpenses = document.getElementById("Total-Expenses").innerText =Expenses;
    //         document.getElementById("totalBalance").innerText =inputNumber-TotalExpenses
    //     }
    //     else{
    //         alert("boro number")
    //     }
    // }
    // else if(isNaN(inputvalue) || isNaN(Foodvalue) || isNaN(Redvalue)|| isNaN(Chothervalue)){
    //     alert("dekhi number")
    // }    
// }
// function savedata(){
//     const TotalExpenses = document.getElementById("Total-Expenses").innerText;
//     const TotalExpensestype = parseFloat(TotalExpenses);
//     const totalBalancevalue = document.getElementById("totalBalance").innerText;
//     const totalBalancetype = parseFloat(totalBalancevalue);
//     const totalBalancevalueresultvalo =(totalBalancetype + TotalExpensestype) 

//     // 
//      const saveinput = input("save-input");
//      const avingAmount =(totalBalancevalueresultvalo*saveinput)/100;
//      const totalBalancevalueresult = totalBalancetype - avingAmount;
//     console.log(totalBalancevalueresult)
    
// }