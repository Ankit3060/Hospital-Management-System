import { catchAsyncError } from "./catchAsyncError.js";
import { ErrorHandler } from "./errorMiddleware.js";

export const isAdminAuthenticated = catchAsyncError(async (req,res,next) => {
    try {
        if(req.user.role !== "Admin"){
            return next(new ErrorHandler("Admin access denied",401));
        }
        next();
    } catch (error) {
        next(new ErrorHandler(error.message,401));
    }
})