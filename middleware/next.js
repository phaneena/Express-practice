const express=require('express')
const app=express()

app.get('/',token,validation,(req,res)=>{
    console.log('user logged')
    res.send('<h1>success</h1>')
})

function token(req,res,next){
    console.log("creating token")
    req.token=true
    next()
}
function validation(req,res,next){
    console.log('start')
    if(req.token){
        console.log('token approved')
        next()
        return
    }
    console.log('next section')
}
app.listen(3500)