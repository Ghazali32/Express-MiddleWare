const express = require('express')
const app = express()
const middleWare = require('./middleWare')

app.use(express.json())
app.use(middleWare)

app.get('/middleware', (req,res) => {
    res.json({
        msg : 'See the logs for middleware output'
    })
})

app.listen(3000 , () =>{
    console.log('Server active');
})
