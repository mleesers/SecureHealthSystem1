arr = []
fetch('https://shsdata.blob.core.windows.net/moredata/bankInfo.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    stuff[0] = stuff[0].trim()
    totalBalance = Number(stuff[0])
    bankBalance = Number(stuff[1])
    if( document.getElementById('balance') !== null){
        document.getElementById('balance').innerHTML = "$ " + totalBalance
    }else{
        console.log("does not exist")
    }
    arr.push(totalBalance,bankBalance)
})


document.getElementById("Submit").onclick = function(event){

    Amount = document.getElementById("payamount").value
    bankBalance = arr[1]
    totalBalance = arr[0]
    if(Amount <= bankBalance){
        bankBalance -= Amount
        totalBalance -= Amount
        window.alert("Payment of $" + Amount + " was successfull. Your balance is now $" + totalBalance);
    }else{
        window.alert("The bank has declined this payment")
        event.preventDefault();
    }

};