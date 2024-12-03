const express=require('express')
const app=express()

app.use(express.json())

let teaData=[]
let nextid=1

//add new tea
app.post('/teass',(req,res)=>{
    const {name,price}=req.body
    const newtea={id:nextid++ ,name,price}
    teaData.push(newtea)
    res.status(201).send(newtea)
})
//get all tea
app.get('/teass',(req,res)=>{
    res.status(200).send(teaData)
})

//get single data
app.get('/teass/:id',(req,res)=>{
    const tea=teaData.find(t=>t.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('tea not found')
    }
    res.status(200).send(tea)
})

//update

app.put('/teass/:id',(req,res)=>{
    const tea=teaData.find(t=>t.id===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send('tea not found')
    }
    const {name,price}=req.body
    tea.name=name
    tea.price=price
    res.status(200).send(tea)
})

//delete 
app.delete('/teass/:id',(req,res)=>{
    const index=teaData.findIndex(t=>t.id===parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('tea not found')
    }
    teaData.splice(index,1)
    return res.status(204).send('deleted')
})

// app.get('/',(req,res)=>{
//     res.send('hello world from express')
// })
// app.post('/',(req,res)=>{
//     res.send('Hii all')
// })
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })

app.listen(3000,()=>{
    console.log('server running')
})