import {Message} from "../models/messageSchema.js";
import {catchAsyncError} from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncError (async (req, res) => {
    const {firstName, lastName, email, phone, message} = req.body;
    if(!firstName || !lastName || !email || !phone || !message){
        // return res.status(400).json({message : "All fields are required"});
        return next(new ErrorHandler("All fields are required",400));
    }
    await Message.create({
        firstName,
        lastName,
        email,
        phone,
        message
    })
    res.status(201).json({message : "Message sent successfully"});
})