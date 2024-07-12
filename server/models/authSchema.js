import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    mobile_number: { type: Number, required: true },
    password: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);



// Models
const User = mongoose.model("User", userSchema);


export { User};
