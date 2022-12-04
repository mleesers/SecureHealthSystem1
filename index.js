userArr=['mleesers','cmolina','ssquarepants']
userpassArr=['88723939Md','MakeupLover369','KrustyKrab123']
// fetch('https://shsdata.blob.core.windows.net/moredata/users.txt')
// .then(response => {
//     return response.text()
// })
//     .then(data => {
//         stuff = data.split('\n')
//         stuffLength = stuff.length
//         for(i=0;i<stuffLength;i++){
//             if(i % 2 == 0){
//                 username = stuff[i]
//                 password = stuff[i+1]
//                 userArr.push(username)
//                 userpassArr.push(password)
//             }
//         } 
//         userArr.pop()
//         userpassArr.pop()
//         console.log(userArr)
//         console.log(userpassArr)
//     })
// }

document.getElementById("login").onclick = function(event){
    var username = document.getElementById("username-login").value;
    var password = document.getElementById("password-login").value;
    valid = false
    for(i=0;i<userArr.length;i++){
        if(username == userArr[i] & password == userpassArr[i]){
            valid = true
        }else{
            console.log(userArr[i],userpassArr[i])
            console.log(username,password)
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