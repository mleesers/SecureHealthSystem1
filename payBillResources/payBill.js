bankBalance = 0
totalBalance = 0
fetch('https://shsdata.blob.core.windows.net/moredata/bankInfo.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    console.log(stuff)
    totalBalance = Number(stuff[0].trim())
    bankBalance = Number(stuff[1].trim())
})

console.log(totalBalance,bankBalance)



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