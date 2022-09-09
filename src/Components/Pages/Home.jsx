import React from 'react'
import "../Styles/Home.css"
import { Box } from '@mui/material';
import PostCard from '../Interface/Post';


export function Home() {
    return (
        <Box justifyContent='space-between' className='home-card'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </Box>
    )
}