arr = []
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
    arr.push(totalBalance,bankBalance)
    document.getElementById('balance').innerHTML = "$ " + totalBalance
    
})
totalBalance = arr[0]
bankBalance = arr[1]
console.log(totalBalance,bankBalance)

export{totalBalance,bankBalance}
