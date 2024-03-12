import express from 'express'
import { singup, login} from '../controllers/AuthRouterController.js';
const authRouter = express.Router();

authRouter.route('/signup').post(async (req, res)=>{
    const userData = req.body;
    console.log(userData);
    const response = await singup(userData); // return json with success key.. 

    if (response.success){
        res.status(201).send(response);
    }else {
        res.status(400).send(response);
    }
})


authRouter.route('/login').post( async (req, res)=>{
    const userData = req.body;
    const response = await login(userData); // return json with success key.. 

    if (response.success){
        res.status(200).send(response);
    }else {
        res.status(400).send(response);
    }
})


// authRouter.post('/logout', async (req, res)=>{
//     const userData = req.body;
//     const response = await logout(userData); // return json with success key.. 

//     if (response.success){
//         res.status(200).send(response);
//     }else {
//         res.status(400).send(response);
//     }
// })

export default authRouter;