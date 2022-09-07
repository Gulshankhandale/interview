import express from 'express';

const router = express.Router();

import products from "../models/productModel"



router.get('/',(req,res)=>{


    const users = res.json();

    res.send(users)
})

router.post('/',(req,res)=>{

    const users = req.body;

    users.push(user);

    res.send("User added successfully");
})

router.patch('/',(req,res)=>{

    const userid = req.body;

    console.log(userid);

    res.send(userid);

    
    // post id 1
    // validation
    // 

})

router.delete('/',(req,res)=>{

    const username = user.find

    // {(username != username)=>{
    //     res.send('username not matched with your entered username')
    // }}
})


export default router;