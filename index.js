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
    

fetch('https://shsdata.blob.core.windows.net/moredata/test.txt')
  .then(response => {
    return response.text()
})
    .then(data => {
        stuff = data.split('\n')
        row = stuff[0]
        console.log(row)
        for(i=0;i<stuff.length();i++){
            if(i % 2 == 0){
                console.log(stuff[i])
            }
        }
    })