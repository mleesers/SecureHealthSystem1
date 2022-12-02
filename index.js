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
    response.text()
    response = response.split(/\r?\n/)
})
  