const  express = require('express')
const path = require('path')

const app = express()

const port = process.env.port||3002

app.listen(port)

app.use(express.urlencoded({extended:true}));

app.set('view engine','hbs')

const valueArray = []

function valuePush(value){
    valueArray.push({name:value});
    
}

app.get('/',(req,res)=>{
    res.render('index',{list:valueArray})
})

app.post('/',(req,res)=>{
   
   var input = req.body.input1
   
   valuePush(input)
   res.redirect('/')
})










