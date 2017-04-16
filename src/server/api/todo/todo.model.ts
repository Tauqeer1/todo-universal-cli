import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
let TodoSchema = new Schema({
    user_id: {type: String},
    text: {type: String},
    completed: {type: Boolean, default: false},
    createdAt: {type: Date, default: Date.now()},
})
 
export default mongoose.model('Todo', TodoSchema);