medications = []
descriptions = []

fetch('https://shsdata.blob.core.windows.net/moredata/medications.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    console.log(stuff)
    stuffLength = stuff.length
    for(i=0;i<stuffLength;i++){
        if(i % 2 == 0){
            medication = stuff[i]
            description = stuff[i+1]
            if(typeof medication === 'string' & typeof description === 'string'){
                medication = medication.trim();
                description = description.trim();
                medications.push(medication)
                descriptions.push(description)
             }
        }   
    } 
    document.getElementById('name').innerHTML = medication[0]
    document.getElementById('name1').innerHTML = medication[1]
    document.getElementById('name2').innerHTML = medication[2]
})
document.getElementById('medication1').onclick = function(){

    medication = medications[0]
    description = descriptions[0]
    document.getElementById('title').style.display = 'none'
    document.getElementById('cards').style.display = 'none'
    document.getElementById('refillRequest').style.display = 'block'
    document.getElementById('medication').innerHTML = medication
    document.getElementById('description').innerHTML = description
    //window.alert("Your request to refill " + medication + " has been processed." )
    
};


document.getElementById("submit").onclick = function(){

    medication = document.getElementById('medication').textContent
    window.alert("Your request to refill " + medication + " has been processed." )
    
};