const dataBase = require('../db/my-irancell-DB')

const getUserIDFormToken = (userToken) => {
    console.log(userToken);
    return new Promise((resolve,reject) => {
        let getMainUserIDQurey = `SELECT id FROM users WHERE token = ${JSON.stringify(userToken)}`
        dataBase.query(getMainUserIDQurey, (error, result) => {
            if (error) {
                console.log('error in getting main user id from user token =>' ,error);
                return false
            }
            // console.log(result);
            resolve (result) 
        })
    })
}


module.exports = getUserIDFormToken