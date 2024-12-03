const express=require('express')
const app=express()

app.get('/',token,(req,res)=>{
    console.log('server is the')
    res.send('<h1>hello all</h1>')
})

function token(req,res,next){
    console.log('middleware is it')
    next()
}

app.listen(3500)