const mongoose=require('mongoose')

mongoose.connect(process.env.DBCONNECT).then(res=>{
    console.log("Server Connected with MongoDB-Atlas");
}).catch(err=>{
    console.log(err);
})