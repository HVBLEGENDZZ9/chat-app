import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res) => {
    try{
        const {message } = req.body;
        const {id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([newMessage.save(), conversation.save()]);

        res.status(201).json(newMessage);

    } catch(error){
        console.log("Error in sendMessage controller ", error.message);
        res.status(500).json({message:"Internal server error"});
    }
};

export const getMesssage = async (req,res) => {
    try{
        const {id : userToChatWith} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, userToChatWith]}
        }).populate("messages");

        res.status(200).json(conversation.messages);

    } catch (error){
        console.log("Error in getMesssage controller ", error.message);
        res.status(500).json({message:"Internal server error"});
    }
};