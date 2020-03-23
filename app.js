const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.status(200).send('Hello World')
  console.log('server started on port 3000')
})
 
app.get('/api',function(req,res){
    const mytest = [{user: 'fake', password: 'fake'}]
    res.json(mytest)
})
app.listen(3000)

module.exports = app