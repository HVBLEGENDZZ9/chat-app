import mongoose from 'mongoose';
import { type } from 'os';

const messageSchema = new mongoose.Schema({
    senderId:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Message = mongoose.model("Message", messageSchema);

export default Message;