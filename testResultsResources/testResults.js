datePage = document.getElementById('section1')
testResults = document.getElementById('section2')

dates = []
test = []
var medication
fetch('https://shsdata.blob.core.windows.net/moredata/dates.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    console.log(stuff)
    stuffLength = stuff.length
    for(i=0;i<stuffLength;i++){
        date = stuff[i]
        if(typeof date === 'string'){
            date = date.trim();
            dates.push(date)
        }
    }
    dates.pop()
    console.log(dates) 
    document.getElementById('date1').innerHTML = dates[0]
    document.getElementById('date2').innerHTML = dates[1]
    document.getElementById('date3').innerHTML = dates[2]
})




document.getElementById("date1").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block' 
    var result,test 
    fetch('https://shsdata.blob.core.windows.net/moredata/test1.txt')
    .then(response => {
        return response.text()
    })
    .then(data => {
        stuff = data.split('\n')
        console.log(stuff)
        test = stuff[0]
        result = stuff[1]

        test = test.trim
        result = result.trim();

        document.getElementById('test').innerHTML = test
        document.getElementById('result').innerHTML = result
    })
    
}
document.getElementById("date2").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block'   
}
document.getElementById("date3").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block'   
}