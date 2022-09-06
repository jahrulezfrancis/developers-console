import React from "react";
import { useFormik } from "formik";
import { Box, fontSize } from "@mui/system";
import "./styles.css";
import { Typography } from "@mui/material";

export const SignupForm = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                padding: '10px',
                textAlign: 'center',
                fontSize: '16px'
            }}>
                <Typography variant='h4' marginBottom={'10px'}>
                    Sign Up
                </Typography>
                <label htmlFor="email">Full Name</label>
                <input
                    placeholder="full name here"
                    id="fullname"
                    name="fullName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullname}
                />
                <label htmlFor="email">Username</label>
                <input
                    placeholder="username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="email">Email Address</label>
                <input
                    placeholder="email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <label htmlFor="email">Password</label>
                <input
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button className="submit-btn" type="submit">Register</button>
            </Box >
        </form>
    );
};


export const SignInForm = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                padding: '10px',
                textAlign: 'center',
                fontSize: '16px'
            }}>
                <Typography variant='h4' marginBottom={'10px'}>
                    Login
                </Typography>
                <label htmlFor="email">Username</label>
                <input
                    placeholder="username"
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />

                <label htmlFor="email">Password</label>
                <input
                    placeholder="password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button className="submit-btn" type="submit">Login</button>
            </Box >
        </form>
    );
};