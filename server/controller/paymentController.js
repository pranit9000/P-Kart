import crypto from "crypto";
import { Payment } from "../models/paymentSchema.js";
import { instance } from "../server.js"; // Ensure this is correctly imported

export const checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.totalAmount * 100), // Amount in paisa/cents
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        console.error('Error in checkout:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
};

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, } = req.body;
    const { totalAmount, name, paymentDate, address, phone, email } = req.body;

    try {
        const body = razorpay_order_id + "|" + razorpay_payment_id;
        // const expectedSignature = crypto
        //     .createHmac("sha256", process.env.RAZORPAY_SECRET || "")
        //     .update(body.toString())
        //     .digest("hex");
        //     console.log("Generated Signature: ", expectedSignature);
        //     console.log("Received Signature: ", razorpay_signature);
        // const isAuthentic = expectedSignature === razorpay_signature;

        // if (!isAuthentic) {
        //     return res.status(400).json({ success: false, message: 'Invalid signature' });
        // }

        const paymentData = {
            razorpay_order_id,
            razorpay_payment_id,
            // razorpay_signature,
            name,
            paymentDate,
            address,
            totalAmount,
            phone,
            email,
        };

        // Validate required fields
        const requiredFields = ['name', 'email', 'phone', 'address', 'totalAmount', 'paymentDate'];
        for (let field of requiredFields) {
            if (!paymentData[field]) {
                return res.status(400).json({
                    success: false,
                    message: `${field} is required.`,
                });
            }
        }

        // Create Payment document
        await Payment.create(paymentData);

        res.status(200).json({ success: true });
        
      } catch (error) {
        console.error("Error processing payment verification:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
};

export const getPayment = async (req, res) => {
  try {
      const payment = await Payment.findById(req.query.id);
      if (!payment) {
          return res.status(404).json({ success: false, message: 'Payment not found' });
      }
      res.status(200).json({ success: true, payment });
  } catch (error) {
      console.error('Error in getting payment:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
