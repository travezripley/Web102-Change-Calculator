
//Web102-Change-Calculator - main.js  
//Created by Travis Ripley
//Started February 25th, 2019.


//Monetary Values
let change = {
    totalChange: 0,
    /*   dollar: {
          one: 0,
          five: 0,
          ten: 0,
          twenty: 0
      }, */
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
};

function calculateChange() {
    //verif it button was clicked
    console.log("button was clicked")

    //user inputs

    //Amount Due
    let amountDue = document.getElementById('amount-due').value * 100;

    //Amount Received
    let amountReceived = document.getElementById("amount-received").value * 100;

    //calculation from the inputs
    let subTotal = (amountReceived) - (amountDue);

    /* let totalResult = document.getElementById("amount-received").value - 
    document.getElementById('amount-due').value;
    document.getElementById('total').innerHTML = totalChange; */

    //logging inputs to the console (for verification)
    console.log(amountDue, amountReceived, subTotal);

   //change in *Dollars
    let change$ = Math.floor((subTotal)/100);
    document.getElementById('dollars-output').innerHTML = change$;

    //change in *Quarters
    let changeQ = Math.floor(((subTotal)-(change$*100))/25);
    document.getElementById('quarters-output').innerHTML = changeQ;

    //change in *dimes
    let changeD = Math.floor(((subTotal)-(change$*100)-(changeQ*25))/10);
    document.getElementById('dimes-output').innerHTML = changeD;

    //change in *nickles
    let changeN = Math.floor(((subTotal)-(change$*100)-(changeQ*25)-(changeD*10))/5);
    document.getElementById('nickels-output').innerHTML = changeN;

    //change in *pennies 
    let changeP = Math.ceil(((subTotal)-(change$*100)-(changeQ*25)-(changeD*10)-(changeN*5))/1);
    document.getElementById('pennies-output').innerHTML = changeP;
}