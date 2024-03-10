import sequelize from "../config/Sequelize.js";
import Checkpoint from "./Checkpoint.js";
import User from "./User.js";
import Request from "./Request.js";
import Comment from "./Comment.js";
import LiveQuestion from "./LiveQuestion.js";
import Path from "./Path.js";
import Replay from "./Replay.js";

User.hasMany(Comment, { as: 'comments', foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id' });


Checkpoint.hasMany(Comment, { as: 'comments', foreignKey: 'checkpoint_id' });
Comment.belongsTo(Checkpoint, { foreignKey: 'checkpoint_id' });


User.hasMany(LiveQuestion, { as: 'questions', foreignKey: 'user_id' });
LiveQuestion.belongsTo(User, { foreignKey: 'user_id' });


Checkpoint.hasMany(LiveQuestion, { as: 'questions', foreignKey: 'checkpoint_id' });
LiveQuestion.belongsTo(Checkpoint, { foreignKey: 'checkpoint_id' });


User.hasMany(Path, { as: 'questions_path', foreignKey: 'user_id' });
Path.belongsTo(User, { foreignKey: 'user_id' });


User.hasMany(Replay, { as: 'user_replays', foreignKey: 'user_id' });
Replay.belongsTo(User, { foreignKey: 'user_id' });


Path.hasMany(Replay, { as: 'path_replays', foreignKey: 'path_id' });
Replay.belongsTo(Path, { foreignKey: 'path_id' });


LiveQuestion.hasMany(Replay, { as: 'live_replays', foreignKey: 'question_id' });
Replay.belongsTo(LiveQuestion, { foreignKey: 'question_id' });


export  {Checkpoint, User, Request, Comment, LiveQuestion, Path, Replay};