const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/Login',function(req,res){
    // console.log(req.body.username)
    appFuctions.Login(req,res);
   
  });
 
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
