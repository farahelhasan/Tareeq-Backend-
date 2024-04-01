import LiveQuestion  from "../models/LiveQuestion.js";

const addLiveQuestion = async(req, res)=> {
    const questionDescription = req.body;
    const {checkpointId} = req.params;
    questionDescription.checkpoint_id = checkpointId;   
     try{
        const newQuestion = await LiveQuestion.create(questionDescription);
        res.status(201).send({mesaage: "question added successfully", data: newQuestion, success: true});
    }catch(error){
        res.status(500).send({error: error.message, success: false})
    } 

}

const getAllQuestionsForSpecificCheckpoint = async(req, res)=> {
    const {checkpointId} = req.params;
    try {
       const questions = await LiveQuestion.findAll(
        {
            where: {checkpoint_id: checkpointId}
        }
       );
       if(questions.length){
        res.status(200).send({data: questions, success: true});

       } else {
        res.status(404).send({
          message: `There is no questions added yet for checkpoint with id ${checkpointId}.`, success: true
        });
      }

    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}


const deleteLiveQuestion = async (req, res) => {
    const {questionId} = req.params.questionId;
    try{
       const num = await LiveQuestion.destroy({
          where: {question_id: questionId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "question deleted successfully", success: true});
      } else {
        res.send({
          message: `Cannot delete Question with id=${questionId}.`, success: false
        });
      }

    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

const editLiveQuestion = async (req, res) => {
    const {questionId} = req.params.questionId;
    const questionData = req.body;
    try{
       const num = await LiveQuestion.update(commentData, {
          where: {comment_id: commentId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "question edited successfully", success: true});
      } else {
        res.send({
          message: `Cannot edit Question with id=${questionId}.`, success: false
        });
      }    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}


export {addLiveQuestion, getAllQuestionsForSpecificCheckpoint, editLiveQuestion, deleteLiveQuestion}