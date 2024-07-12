import ErrorHandler from "../error/error.js";
import { User } from "../models/authSchema.js";

export const signupController = async (req, res, next) => {

    const { name,email,mobile_number,password } = req.body;

    if (!name || !email || !mobile_number || !password) {
        return next(new ErrorHandler("Please provide all fields", 400));
    }
    try {
        await User.create({name,email,mobile_number,password})
        res.status(200).json({ success: true, message: "User created successfully" })
    } catch (error) {
        error.message = error.message || "Internal Server Error" 
        if(error.name === "ValidationError"){
        const ValidationError = Object.values(error.errors).map(val => val.message)
        return next(new ErrorHandler(ValidationError.join(" & "), 400))
        }
        return next(error)
    }
}