const express=require("express")
const app=express()
const cors=require("cors")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://xalide:xalide2001@cluster0.lbiijj0.mongodb.net/").then(()=>{
    console.log("connected")
})
const Userschema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Collection=mongoose.model("collection",Userschema)

app.get("/",cors(),(req,res)=>{
    
})

app.post("/",async(req,res)=>{
    const {email,password}=req.body
    try{
         const check= await Collection.findOne({email:email})

         if(check){
            res.json("exist")
         }
         else{
            res.json("notexist")
         }
    }
    catch{
          res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    const data={
        email:email,
        password:password
    }
    try{
         const check= await Collection.findOne({email:email})

         if(check){
            res.json("exist")
         }
         else{
            res.json("notexist")
            await Collection.insertMany([data])
         }
    }
    catch{
          res.json("notexist")
    }
})

app.listen(8080)