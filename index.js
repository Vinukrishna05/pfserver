 require('dotenv').config()//configuring dotenv package to server for loading env variables to process.env

 
 const express=require('express')
 const cors=require('cors')
 const router=require('./Routes/routes')
 require('./Connect/dbConnect')

 const server=express()//creating server app

 server.use(cors())//cors return cors middleware and use configures it
 server.use(express.json())//configuring middleware,converting jsoon data format to native
server.use(router)
server.use("/projectimage",express.static('./uploads'))


 const PORT=process.env.PORT || 3000//setting default port no and alternate port number from env
 server.listen(PORT,()=>{
    console.log("server running at port",PORT);
 })

// server.get('/demo/:id',(req,res)=>{
//    console.log(req.params.id);
//    res.send("GET Request hit")
// })

// server.post('/demopost',(req,res)=>{
//    console.log(req.query);
//    console.log(req.body);
//    // res.send("POST Request hit")
//    res.json({"msg":"ok"}).status(205)
// })

// server.put('/putreq',(req,res)=>{
//    res.send("put request hit")
// })

// server.delete('/del',(req,res)=>{
//    res.send("del request send")
// }) 