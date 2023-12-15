let userToken = require('crypto').randomBytes(8).toString('hex')
let test = userToken.split('')
console.log(test);