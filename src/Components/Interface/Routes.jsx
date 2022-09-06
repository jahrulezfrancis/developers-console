import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import PostCard from './Post';
import { SignupForm } from '../Pages/SignUp';


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
        <Box justifyContent='center'>
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <Box textAlign={'center'}>
                <h1>The Bookmark page</h1>
            </Box>
            <DemoCard />
            <DemoCard />
            <DemoCard />
        </Box>
    )
}

export function ProfilePage() {
    return (
        <Box>
           <SignupForm />
        </Box>
    )
}

export function Home() {
    return (
        <Box justifyContent='center'>
            <PostCard />
        </Box>
    )
}