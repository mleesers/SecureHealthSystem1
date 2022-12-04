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
    document.getElementById('balance').innerHTML = "$ " + totalBalance
    doStuff(totalBalance,bankBalance)
})
function doStuff(totalBalance,bankBalance){
    arr.push(totalBalance)
    arr.push(bankBalance)
    console.log(arr)
}


totalBalance = arr[0]
bankBalance = arr[1]
console.log(totalBalance,bankBalance)
