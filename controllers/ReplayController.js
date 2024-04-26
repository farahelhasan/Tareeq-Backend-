import Replay from '../models/Replay.js';

const deleteReplay = async (req, res) => {
    const {replayId} = req.params;
    try{
       const num = await Replay.destroy({
          where: {replay_id: replayId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "replay deleted successfully", success: true});
      } else {
        res.send({message: `Cannot delete replay with id=${replayId}.`,success: false });
      }   
     }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

const editReplay = async (req, res) => {
    const {replayId} = req.params;
    const replayData = req.body;
    try{
       const num = await Replay.update(replayData, {
          where: {replay_id: replayId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "replay edited successfully", success: true});
      } else {
        res.send({
          message: `Cannot edit replay with id=${commentId}.`
        });
      }    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

// Replais for live questions.
const getAllReplayForSpecificQuestion = async (req, res)=>{
    const {questionId} = req.params;
    try{
    const replayData = await Replay.findAll({
       where: {
        question_id: questionId
       } 
    });
    if(!replayData.length){
        return res.status(404).send({mesaage: 'No Replais Added Yet ... ADD ONE!', success: true})
    }
    return res.status(200).send({ data: replayData, success: true})
    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

const addReplayToSpecificQuestion = async (req, res)=>{
    const replayData = req.body;
    const {questionId} = req.params;
    replayData.question_id = questionId;
    try{
    const newReplay = await Replay.create(replayData);
    res.status(201).send({mesaage: "replay added successfully", data: newReplay, status: true })

    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

// Replais for path.
const getAllReplayForSpecificPath = async (req, res)=>{
    const {pathId} = req.params;
    try{
    const replayData = await Replay.findAll({
       where: {
        path_id: pathId
       } 
    });
    if(!replayData.length){
        return res.status(404).send({mesaage: 'No Replais Added Yet ... ADD ONE!', success: true})
    }
    return res.status(200).send({ data: replayData, success: true})
    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

const addReplayToSpecificPath = async (req, res)=>{
    const replayData = req.body;
    const {pathId} = req.params;
    replayData.path_id = pathId;
    try{
    const newReplay = await Replay.create(replayData);
    res.status(201).send({mesaage: "replay added successfully", data: newReplay, status: true })

    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}


export {getAllReplayForSpecificQuestion, addReplayToSpecificQuestion, getAllReplayForSpecificPath, addReplayToSpecificPath, deleteReplay, editReplay}
    