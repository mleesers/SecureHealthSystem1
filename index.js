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
    
// document.getElementById("login").onclick = function(event){
fetch('https://shsdata.blob.core.windows.net/moredata/users.txt')
.then(response => {
    return response.text()
})
    .then(data => {
        stuff = data.split('\n')
        row = stuff[0]
        stuffLength = stuff.length
        console.log(row)
        for(i=0;i<stuffLength;i++){
            if(i % 2 == 0){
                username = stuff[i]
                password = stuff[i+1]
                console.log(username,password)
            }
        } 
    })
// }
// function check(username,password){
    
    
//         var username = document.getElementById("username-login").value;
//         var password = document.getElementById("password-login").value;
//         if(username == 'mleesers' & password == "88723939Md"){
//             window.alert("you have been logged in")
//         }else{
//             event.preventDefault();
//             document.getElementById("wrong").style.display = 'block';
//         }
// }