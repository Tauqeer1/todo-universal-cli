import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
let TodoSchema = new Schema({
    text: {type: String},
    createdAt: {type: Date, default: Date.now()},
})
 
export default mongoose.model('Todo', TodoSchema);