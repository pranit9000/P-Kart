import ErrorHandler from "../error/error.js";
import {  User } from "../models/authSchema.js"; // Correct import

export const LoginController = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorHandler("Please provide all fields", 400));
    }

    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        // Directly compare plain-text passwords
        if (user.password !== password) {
            return next(new ErrorHandler("Invalid email or password", 401));
        }

        console.log("Loggin Successful");

        res.status(200).json({ success: true, message: "User logged in successfully" });
    } catch (error) {
        if (error.name === "ValidationError") {
            const ValidationError = Object.values(error.errors).map(val => val.message);
            return next(new ErrorHandler(ValidationError.join(" & "), 400));
        }
        return next(new ErrorHandler(error.message || "Internal Server Error", 500));
    }
};
