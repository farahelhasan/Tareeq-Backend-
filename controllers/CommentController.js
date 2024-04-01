import Comment from "../models/Comment.js";

const getAllCommentsForSpecificCheckpoint = async (req, res)=>{
    const {checkpointId} = req.params;
    try{
    const commentData = await Comment.findAll({
       where: {
          checkpoint_id: checkpointId
       } 
    });
    if(!commentData.length){
        return res.status(404).send({mesaage: 'No Comment Added Yet ... ADD ONE!', success: true})
    }
    return res.status(200).send({ data: commentData, success: true})
    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

const addComment = async (req, res)=>{
    const commentData = req.body;
    const {checkpointId} = req.params;
    commentData.checkpoint_id = checkpointId;
    try{
    const newComment = await Comment.create(commentData);
    res.status(201).send({mesaage: "comment added successfully", data: newComment, status: true })

    }catch(error){
        res.status(500).send({error: error.message, success: false})

    }
}

const deleteComment = async (req, res) => {
    const {commentId} = req.params;
    try{
       const num = await Comment.destroy({
          where: {comment_id: commentId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "comment deleted successfully", success: true});
      } else {
        res.send({message: `Cannot delete comment with id=${commentId}.`,success: false });
      }    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

const editComment = async (req, res) => {
    const {commentId} = req.params;
    const commentData = req.body;
    try{
       const num = await Comment.update(commentData, {
          where: {comment_id: commentId}
       })
       if (num == 1) {
        res.status(200).send({mesaage: "comment edited successfully", success: true});
      } else {
        res.send({
          message: `Cannot delete comment with id=${commentId}.`
        });
      }    }catch(error){
       res.status(400).send({error: error.message, success: false})
    } 
}

export {getAllCommentsForSpecificCheckpoint, addComment, deleteComment, editComment}
    