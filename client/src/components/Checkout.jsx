import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import style from './Checkout.module.css';
function Checkout({ cart, setCart }) {
    const totalPrice = cart.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        return total + price;
    }, 0);

    const [formData, setFormData] = useState({
        totalAmount: totalPrice * 100, // Amount in paisa/cents for Razorpay
        name: '',
        phone: '',
        email: '',
        address: '',
        paymentDate: new Date(),
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Step 1: Initiate checkout and get order details
          const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', {
              totalAmount: formData.totalAmount,
          });

          console.log('Order:', order);

          // Step 2: Configure Razorpay options
          const options = {
              key: process.env.RAZORPAY_API,
              amount: order.amount, // Amount should be in paisa/cents
              currency: "INR",
              name: "P-Kart",
              description: "Test Transaction",
              image: "/your_logo.png",
              order_id: order.id,
              handler: async function (response) {
                  // Step 3: Send payment details to your server
                  const paymentDetails = {
                      razorpay_order_id: response.razorpay_order_id,
                      razorpay_payment_id: response.razorpay_payment_id,
                      // razorpay_signature: response.razorpay_signature,
                      totalAmount: formData.totalAmount,
                      name: formData.name,
                      paymentDate: formData.paymentDate,
                      address: formData.address,
                      phone: formData.phone,
                      email: formData.email,
                  };
                  console.log(paymentDetails);
                  try {
                      const verifyResponse = await axios.post('http://localhost:4000/api/paymentverification', paymentDetails);
                      if (verifyResponse.data.success) {
                          alert('Payment successful!');
                          setCart([]);
                          navigate('/');
                      } else {
                          alert('Payment verification failed. Please try again.');
                      }
                  } catch (error) {
                      console.error('Error in payment verification:', error);
                      alert('Payment verification failed. Please try again.');
                  }
              },
              prefill: {
                  name: formData.name,
                  email: formData.email,
                  contact: formData.phone,
              },
              notes: {
                  address: formData.address,
              },
              theme: {
                  color: "#3399cc",
              },
          };

          // Step 3: Initialize Razorpay payment
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
      } catch (error) {
          console.error('Error in checkout:', error);
          alert('Payment initiation failed. Please try again.');
      }
  };
  

    return (
        <div className={style.Checkout}>
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Total Amount:
                    <input
                        type="number"
                        name="totalAmount"
                        value={formData.totalAmount}
                        readOnly
                    />
                </label>
                <br />
                <button type="submit">Make Payment</button>
            </form>
            <div>
                <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Checkout;
