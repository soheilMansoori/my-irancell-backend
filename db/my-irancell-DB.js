const mysql = require('mysql')

const dataBase = mysql.createConnection({
    host :'localhost',
    user : 'root',
    password : '',
    database : 'my-irancell'
})

dataBase.connect((err) => {
    if(err){
        console.log('you have error to conect data base ' , err);
    } else {

        console.log('you conect to data base successful');
    }
})


module.exports = dataBase