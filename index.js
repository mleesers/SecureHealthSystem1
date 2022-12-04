userArr=[]
userpassArr=[]
fetch('https://shsdata.blob.core.windows.net/moredata/users.txt')
.then(response => {
    return response.text()
})
    .then(data => {
        stuff = data.split('\n')
        stuffLength = stuff.length
        for(i=0;i<stuffLength;i++){
            if(i % 2 == 0){
                username = stuff[i]
                password = stuff[i+1]
                if(typeof username === 'string' & typeof password === 'string'){
                    username = username.trim();
                    password = password.trim();
                    userArr.push(username)
                    userpassArr.push(password)
            }
                }
                
        } 
    })

document.getElementById("login").onclick = function(event){
    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    valid = false
    for(i=0;i<userArr.length;i++){
        if(username == userArr[i] & password == userpassArr[i]){
            valid = true
        }else{
            continue;
        }
    }
    if(valid == true){
        window.alert("you have been logged in")
    }else{
        document.getElementById("wrong").style.display = 'block';
        event.preventDefault();
    }
}