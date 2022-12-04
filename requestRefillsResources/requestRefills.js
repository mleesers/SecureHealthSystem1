medications = []
descriptions = []

fetch('https://shsdata.blob.core.windows.net/moredata/medications.txt')
.then(response => {
    return response.text()
})
.then(data => {
    stuff = data.split('\n')
    stuffLength = stuff.length
    for(i=0;i<stuffLength;i++){
        if(i % 2 == 0){
            medication = stuff[i]
            description = stuff[i+1]
            if(typeof username === 'string' & typeof password === 'string'){
                medication = medication.trim();
                description = description.trim();
                medications.push(medication)
                descriptions.push(description)
        }
            }
            
    } 
})


document.getElementById("submit").onclick = function(){

    medication = document.getElementById('medication').textContent
    window.alert("Your request to refill " + medication + " has been processed." )
    
};