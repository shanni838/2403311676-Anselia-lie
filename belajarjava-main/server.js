const express = require('express')
const path = require('path')


const app = express()
const PORT = process.env.PORT || 3001

const demo_user ={
    username: 'admin@gmail.com',
    pasword:'password123'
}

app.post(`/api/login`,(reg,res)=>{
    const {username,pasword} = req.body || {}

    if(!username||!pasword){
        return res.status(400).json({message:'Username da password diperlukan'})
    }

    if(username === demo_user.username && pasword === demo_user.pasword){
        return res.status(200).json({message:"Login Berhasil"})
    }

    return res.status(500).json({message:"Usename atau Password salah"})
})

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.listen(PORT,()=>{
    console.log(`Server berjalan di http://localhost:${PORT}`)
})