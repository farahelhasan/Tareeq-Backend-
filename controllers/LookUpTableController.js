import LookupTable from "../models/lookupTable.js";

const instertIntoLookuptable = async (req, res) => {
    const data = req.body;
    try{
       const checkpoint = await LookupTable.create(data);
       res.status(201).send({mesaage: "successfully", data: checkpoint, success: true});
    }catch(error){
       res.status(500).send({error: error.message, success: false})
    } 
 }

 export{instertIntoLookuptable}