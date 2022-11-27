bankBalance = 1500
totalBalance = 6000





document.getElementById("Submit").onclick = function(event){

    Amount = document.getElementById("payamount").value

    if(Amount <= bankBalance){
        bankBalance -= Amount
        totalBalance -= Amount
        window.alert("Payment of $" + Amount + " was Successfull. Your balance is now $" + totalBalance);
    }else{
        window.alert("The bank has declined this payment")
        event.preventDefault();
    }


    
};