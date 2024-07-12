import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css'
const Login = ({setLogin}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const login = async (data) => {
        try {
            const response = await fetch('http://localhost:4000/api/v1/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Success:', result);
                // Handle successful login
                // You can store the token or redirect to another page

                setLogin();
                navigate("/shop");
            } else {
                console.error('Login failed:', result.message);
                // Handle login error
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle login error
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div className={style.Login}>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
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
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
