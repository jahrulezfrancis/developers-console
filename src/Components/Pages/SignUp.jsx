import React from "react";
import { useFormik } from "formik";
import { Box } from "@mui/system";
import "./styles.css";
import { Typography } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

export function UserLoginTab() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} justifyContent='center'>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} justifyContent='center' alignItems='center'>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Login" value="1" />
                        <Tab label="Sign up" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SignInForm />
                </TabPanel>
                <TabPanel value="2">
                    <SignupForm />
                </TabPanel>
            </TabContext>
        </Box>
    );
}



export const SignupForm = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        }
    });
    return (
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ width: { sx: '40%', md: '50%', lg: '40%' } }} ></Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: 'center',
                        flexDirection: "column",
                        padding: '10px',
                        fontSize: '16px',
                        textAlign: 'center'
                    }}>
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