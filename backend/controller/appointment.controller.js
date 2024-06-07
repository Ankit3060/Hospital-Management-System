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
        lastName : doctor_lastName,
        role : "Doctor",
        doctorDepartment : department
    })

    if(isConflict.length === 0){
        return next(new ErrorHandler("Doctor not found", 400))
    }
    if(isConflict.length > 1){
        return next(new ErrorHandler("Doctor conflict! please contact through email or phone", 400))
    }

    const doctorId = isConflict[0]._id;
    const patientId = req.user._id;

    const appointment = await Appointment.create({
        firstName, lastName, email, phone, pan, dob,
        gender, appoinntment_date, department, doctor_firstName,
        doctor_lastName, hasVisited, address,
        docot:{
            firstName: doctor_firstName,
            lastName: doctor_lastName}
        });
    
    res.status(200).json({
        success: true,
        message : "Appointment send successfully",
        appointment
    })
})