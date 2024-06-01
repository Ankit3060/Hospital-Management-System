import {User} from "../models/userSchema.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import {generateToken} from "../utils/jwtToken.js"

//Register patient
export const patientRegister = catchAsyncError(async (req, res, next) => {
    const {firstName, lastName, email, phone, 
            pan, dob, gender, password, role} = req.body;
    
    //Checking if all fields are entered
    if(!firstName || !lastName || !email || !phone || !pan || !dob || !gender || !password || !role){
        return next(new ErrorHandler("All fields are required",400));
    }

    //Checking if email already exists
    const isEmailExist = await User.findOne({ email });
    if(isEmailExist){
        return next(new ErrorHandler("Email already registered",400));
    }

    //Here we are registring patient 
    const user = await User.create({
        firstName, lastName, email, phone, pan, dob, gender, password, role});

    //Generating token
    generateToken(user, "Patient registered" , 201, res)

    // res.status(201).json({
    //     success:true, 
    //     message : "Patient registered successfully", user});
})

//Login
export const login = catchAsyncError(async (req, res, next) => {
    const {email, password, confirmPassword, role} = req.body;

    //Checking if email and password is entered
    if(!email || !password || !role || !confirmPassword){
        return next(new ErrorHandler("Please enter all the field",400));
    }

    //Checking if password and confirm password is same
    if(password !== confirmPassword){
        return next(new ErrorHandler("Password does not match",400));
    }

    //Finding user in database
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    //Checking if password is correct
    const isPasswordMatched = await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid email or password",401));
    }

    //Checking if role is same
    if(role !== user.role){
        return next(new ErrorHandler("Invalid role",401));
    }

    //Generating token
    generateToken(user, "User logged in successfully" , 201, res)

    // res.status(200).json({
    //     success:true, 
    //     message : "User logged in successfully", user});
})

//Add Admin
export const addAdmin = catchAsyncError(async (req, res, next) => {
    const {firstName, lastName, email, phone, 
            pan, dob, gender, password} = req.body;
    
    //Checking if all fields are entered
    if(!firstName || !lastName || !email || !phone || !pan || !dob || !gender || !password){
        return next(new ErrorHandler("All fields are required",400));
    }

    //Checking if email already exists
    const isRegistered = await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} with this email already registered`,400));
    }

    const admin = await User.create({
        firstName, lastName, email, phone, pan, dob, gender, password, role : "Admin"});

    //Generating token
    generateToken(admin, "Admin registered" , 201, res)

    // res.status(201).json({
    //     success:true,
    //     message : "Admin registered successfully", admin});
})