var bankBalance,totalBalance
fetch('https://shsdata.blob.core.windows.net/moredata/bankInfo.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    console.log(stuff)
    stuff[0] = stuff[0].trim()
    console.log(stuff[0])
    totalBalance = Number(stuff[0])
    bankBalance = Number(stuff[1])
})



document.getElementById('balance').innerHTML = "$ " + totalBalance
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
console.log(totalBalance,bankBalance)


