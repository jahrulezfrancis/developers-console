import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { SignInForm } from '../Pages/SignUp';
import BookmarkPage from '../Pages/Bookmark';


const DemoCard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper elevation={3} />
            <Paper elevation={3} />
            <Paper elevation={3} />
        </Box>
    )
}

export function Bookmark() {

    return (
        <Box justifyContent='center' padding={'10px'}>
            <BookmarkPage />
        </Box>
    )
}

export function ProfilePage() {
    return (
        <Box>
            <SignInForm />
        </Box>
    )
}