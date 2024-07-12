import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        razorpay_order_id: { type: String, required: true },
        razorpay_payment_id: { type: String, required: true },
        // razorpay_signature: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
        totalAmount: { type: Number, required: true },
        paymentDate: { type: Date, required: true, default: Date.now },
    },
    { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
