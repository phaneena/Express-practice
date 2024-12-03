const express=require('express')
const app=express()
app.use(express.json())

let users=[]

app.post('/users',(req,res)=>{
    const {name,username,email}=req.body
    const data={id:users.length,name,username,email}
    users.push(data)
    res.status(201).send(data)
})

app.get('/users',(req,res)=>{
    res.status(200).send(users)
})

app.get('/users/:id',(req,res)=>{
    const singledata=users.find(datas=>datas.id===parseInt(req.params.id))
    if(!singledata){
       return res.status(404).send('data not found')
    }
    res.status(200).send(singledata)
})

app.put('/users/:id',(req,res)=>{
    const update=users.find(datas=>datas.id===parseInt(req.params.id))
    if(!update){
        return res.status(404).send('not updated')
    }
    const {name,username,email}=req.body
    update.name=name
    update.username=username
    update.email=email
    res.status(200).send(update)
})
app.listen(3100,()=>{
    console.log('server running')
})