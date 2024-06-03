import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Appointment } from "../models/appointmentSchema.js";
import { User } from "../models/userSchema.js";

export const postAppointment = catchAsyncError(async (req, res, next) => {
    const {firstName, lastName, email, phone, pan, dob,
        gender, appoinntment_date, department, doctor_firstName,
        doctor_lastName, hasVisited, address
    } = req.body

    if(!firstName || !lastName || !email || !phone || !pan || !dob || 
        !gender || !appoinntment_date || !department || !doctor_firstName ||
        !doctor_lastName || !hasVisited || !address){
        return next(new ErrorHandler("Please fill all the fields", 400))
        }

    const isConflict = await User.find({
        firstName: doctor_firstName,
        lastName : doctor_lastName
    })

    if(isConflict){
        return next(new ErrorHandler("Doctor is already busy in that slot", 400))
    }
})