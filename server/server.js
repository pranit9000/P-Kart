import app from "./app.js";

import Razorpay from 'razorpay';

export const instance = new Razorpay({ key_id: process.env.RAZORPAY_API, key_secret: process.env.RAZORPAY_SECRET });


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})