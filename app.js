const express = require('express')
var json = require('json');
const app = express()
 
app.get('/', function (req, res) {
  res.status(200).send('Hello World')
  console.log('server started on port 3000')
})
 

app.get('/test',function(req,res){
    const mytest = [{user: 'fake', password: 'fake'}]

    res.status(200).json(mytest)

})
app.listen(3000)