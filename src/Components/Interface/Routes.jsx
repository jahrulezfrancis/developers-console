import React from 'react'
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';


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
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <Box textAlign={'center'}>
                <h1>yeah this is the Profile page you know</h1>
            </Box>
            <DemoCard />
            <DemoCard />
            <DemoCard />
        </Box>
    )
}

export function Home() {
    return (
        <Box justifyContent='center'>
            <DemoCard />
            <DemoCard />
            <DemoCard />
            <Box textAlign={'center'}>
                <h1>yeah this is the Home page you know</h1>
            </Box>
            <DemoCard />
            <DemoCard />
            <DemoCard />
        </Box>
    )
}