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
    // for(i=0;i<stuffLength;i++){
    //     if(i % 2 == 0){
    //         medication = stuff[i]
    //         description = stuff[i+1]
    //         if(typeof medication === 'string' & typeof description === 'string'){
    //             medication = medication.trim();
    //             description = description.trim();
    //             medications.push(medication)
    //             descriptions.push(description)
    //          }
    //     }   
    // } 
    // document.getElementById('name').innerHTML = medications[0]
    // document.getElementById('name1').innerHTML = medications[1]
    // document.getElementById('name2').innerHTML = medications[2]
})



document.getElementById("date1").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block'   
}
document.getElementById("date2").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block'   
}
document.getElementById("date3").onclick = function(){
    datePage.style.display = 'none'
    testResults.style.display = 'block'   
}