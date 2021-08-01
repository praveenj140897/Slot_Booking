const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 4000


app.use(cors())
app.use(bodyParser.json())


let slot = ['9:00 A.M','10:00 A.M','11:00 A.M','12:00 P.M','1:00 P.M','2:00 P.M','3:00 P.M','4:00 P.M','5:00 P.M']


app.get('/',async(req, res)=>{
    // await slot.find((err,slot)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.send(slot)
    //     }
    // })
    res.send(slot)
})

app.listen(PORT,()=>{
    console.log("Server is running on Port: " + PORT)
})