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
    
// };*/
// import { createConnection } from 'mysql';
// import { readFileSync } from 'fs';

// var reader = new FileReader()

// var config =
// {
//     host: 'securehealth.database.windows.net',
//     user: 'mleesers',
//     password: '88723939Md',
//     database: 'securehealthserverdata',
//     port: 3306,
//     ssl: {ca: readFileSync("C:/BaltimoreCyberTrustRoot.crt.pem")}
// };

// const conn = new createConnection(config);

// conn.connect(
//     function (err) { 
//         if (err) { 
//             console.log("!!! Cannot connect !!! Error:");
//             throw err;
//         }
//         else {
//             console.log("Connection established.");
//             readData();
//         }
//     });

// function readData(){
//     conn.query('SELECT * FROM inventory', 
//         function (err, results, fields) {
//             if (err) throw err;
//             else console.log('Selected ' + results.length + ' row(s).');
//             for (i = 0; i < results.length; i++) {
//                 console.log('Row: ' + JSON.stringify(results[i]));
//             }
//             console.log('Done.');
//         })
//     conn.end(
//         function (err) { 
//             if (err) throw err;
//             else  console.log('Closing connection.') 
//     });
// };

fetch('https://shsdata.blob.core.windows.net/moredata/test.txt')
  .then(response => response.text())
  .then(text => console.log(text))
