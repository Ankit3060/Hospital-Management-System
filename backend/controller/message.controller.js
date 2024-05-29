import {Message} from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
    const {firstName, lastName, email, phone, message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        return res.status(400).json({message : "All fields are required"});
    }
    await Message.create({
        firstName,
        lastName,
        email,
        phone,
        message
    })
    res.status(201).json({message : "Message sent successfully"});
}