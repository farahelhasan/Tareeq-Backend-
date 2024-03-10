import express from 'express'

const router = express();

router.post('/api/signup', async (req, res)=>{
    const userData = req.body;
    const response = await singup(userData); // return json with success key.. 

    if (response.success){
        res.status(201).send(response);
    }else {
        res.status(400).send(response);
    }
})

router.post('/api/login', async (req, res)=>{
    const userData = req.body;
    const response = await login(userData); // return json with success key.. 

    if (response.success){
        res.status(200).send(response);
    }else {
        res.status(400).send(response);
    }
})


router.post('/api/logout', async (req, res)=>{
    const userData = req.body;
    const response = await logout(userData); // return json with success key.. 

    if (response.success){
        res.status(200).send(response);
    }else {
        res.status(400).send(response);
    }
})