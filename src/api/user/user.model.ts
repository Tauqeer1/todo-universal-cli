import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';
let UserSchema = new Schema({
    name: {type: String},
    email: {type: String, lowercase: true, unique: true},
    createdAt: {type: Date, default: Date.now()},
    password: {type: String}
})
 
export let User = mongoose.model('User', UserSchema);