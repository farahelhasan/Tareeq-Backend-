import Path from "../models/Path.js";

const addPathQuestion = async(req, res)=> {
    const questionDescription = req.body;
     try{
        const newQuestion = await Path.create(questionDescription);
        res.status(201).send({mesaage: "question added successfully", data: newQuestion, success: true});
    }catch(error){
        res.status(500).send({error: error.message, success: false})
    } 

}

const getSameQuestionPath = async(req, res)=> {
    const {start, end } = req.params;
    try {
       const questions = await Path.findAll(
        {
            where: {start: start}
        }
       );
       if(questions.length){
        res.status(200).send({data: questions, success: true});

       } else {
        res.status(404).send({
          message: `There is no questions added yet for this path: start = ${start}, end= ${end}`, success: true
        });
      }

    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

const getAllQuestionPathForSpecificUser= async(req, res)=> {
  const {userId} = req.params;
  try {
     const questions = await Path.findAll(
      {
          where: {user_id: userId}
      }
     );
     if(questions.length){
      res.status(200).send({data: questions, success: true});

     } else {
      res.status(404).send({
        message: `The user with id = ${userId} dose not add any question yet.`, success: true
      });
    }

  }catch(error){
      res.status(500).send({error: error.message, success: false})

  }
}

const deletePathQuestion = async (req, res) => {
    const {pathId} = req.params;
    try{
       const num = await Path.destroy({
          where: {path_id: pathId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "question deleted successfully", success: true});
      } else {
        res.send({
          message: `Cannot delete Question with id=${pathId}.`, success: false
        });
      }

    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

const getAllQuestionPath= async(req, res)=> {
  try {
     const questions = await Path.findAll();
     if(questions.length){
      res.status(200).send({data: questions, success: true});

     } else {
      res.status(404).send({
        message: `there is no questions added yet.`, success: true
      });
    }

  }catch(error){
      res.status(500).send({error: error.message, success: false})

  }
}




export {addPathQuestion, getSameQuestionPath, getAllQuestionPathForSpecificUser, deletePathQuestion, getAllQuestionPath}