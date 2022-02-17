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
// sava control 
function saveoffer(){
    const TotalExpenses = document.getElementById("total-expenses").innerText;
    const TotalExpensestype = parseFloat(TotalExpenses);
    const TotalBalance =document.getElementById("total-Balance").innerText;
    const TotalBalancetype = parseFloat(TotalBalance);
    // add  TotalExpensestype and  TotalBalancetype, totalincome
    const totalincome = (TotalExpensestype + TotalBalancetype);
    // save input  function 
    const saveinput = input("save-input");
    if(saveinput > 0){
        const total = (totalincome * saveinput)/100;
        document.getElementById("Saving-Amount").innerText = total;
        const result = TotalBalancetype-total;
        if(TotalBalancetype > total){
            document.getElementById("Remaining").innerText = result;
        }
        else{
            alert("sorry, not Saving Amount")
        }  
    }
    else if(isNaN(saveinput)){
        alert("Please positive number")
    }
    else{
        alert("Please positive number")
    }
}

