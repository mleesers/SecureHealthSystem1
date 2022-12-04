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
    arr.push(totalBalance,bankBalance)
})

console.log(arr)
