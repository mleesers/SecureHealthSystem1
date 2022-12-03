// /*
// document.getElementById("login").onclick = function(event){
    
//     var username = document.getElementById("username-login").value;
//     var password = document.getElementById("password-login").value;
//     if(username == 'mleesers' & password == "88723939Md"){
//        window.alert("you have been logged in")
//     }else{
//         event.preventDefault();
//         document.getElementById("wrong").style.display = 'block';
//     }
    
// 
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
                userArr.push(username)
                userpassArr.push(password)
            }
        } 
        console.log(userArr)
        console.log(userpassArr)
    })
// }
// function check(username,password){ 
document.getElementById("login").onclick = function(event){
    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    console.log(typeof username)
    console.log(typeof password)
    valid = false
    for(i=0;i<userArr.length;i++){
        if(username == userArr[i] & password == userpassArr[i]){
            valid = true
        }else{
            console.log(typeof userArr[i], typeof userpassArr[i])
            console.log('no')
        }
    }
    if(valid == true){
        console.log(valid)
        window.alert("you have been logged in")
    }else{
        console.log(valid)
        document.getElementById("wrong").style.display = 'block';
        event.preventDefault();
    }
}