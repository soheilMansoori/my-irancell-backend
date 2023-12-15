const dataBase = require('./db/my-irancell-DB')
const express = require('express')
const cors = require('cors')
const getUserIDFormToken = require('./utils/func')
const port = 8080

const server = express()
server.use(cors())

server.get('/api/user', (req, res) => {
    let userToken = req.headers.jwt
    let getMainUserQuery = `SELECT * FROM users WHERE token = "${userToken}" `
    dataBase.query(getMainUserQuery, (error, resuilt) => {
        if (error) {
            console.log(error);
            res.send(JSON.stringify(null))
        } else {
            res.send(JSON.stringify(resuilt))
        }
    })
})


server.get('/api/services/:isActive', (req, res) => {
    const isActive = req.params.isActive
    const getServicesQurey = `SELECT * FROM services WHERE isActive	= ${isActive} `
    dataBase.query(getServicesQurey, (error, resuilt) => {
        if (error) {
            console.log(error);
            res.send(null)
        } else {
            res.send(resuilt)
        }
    })
})


server.get('/api/recommend-packs', (req, res) => {
    const userToken = req.headers.jwt
    let userID = null
    getUserIDFormToken(userToken)
        .then(result => {
            console.log(result)
            userID = result[0].id
            const getUserRecommendPacksQurey = `SELECT * FROM recommend_packet WHERE userID = ${userID}`
            dataBase.query(getUserRecommendPacksQurey, (error, result) => {
                if (error) {
                    console.log(error);
                    res.send(JSON.stringify(null))
                } else {
                    res.send(result)
                }
            })
        })
})



server.get('/api/user-buy', (req, res) => {
    const userToken = req.headers.jwt
    let userID = null
    getUserIDFormToken(userToken)
        .then(result => {
            console.log(result);
            userID = result[0].id
            const getUserBuyInfoQurey = `SELECT * FROM sales WHERE userID = ${userID}`
            dataBase.query(getUserBuyInfoQurey, (error, result) => {
                if (error) {
                    console.log(error);
                    res.send(null)
                } else {
                    res.send(result)
                }
            })
        })
})




server.listen(port, (err) => {
    if (err) {
        console.log(`Server not Run On Port ${port}`);
    } else {
        console.log(`Server Run On Port ${port}`);
    }
})
