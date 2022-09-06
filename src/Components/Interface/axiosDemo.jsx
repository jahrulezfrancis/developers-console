import React from 'react'
import axios from 'axios';
import { Box } from '@mui/system';


const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((data) => {
        console.log(data[0].name);
    });
});



async function DemoCard() {
    const Fetched = await fetch('https://jsonplaceholder.typicode.com/posts')
    Fetched.then((response) =>{
        const jsonPromise = response.json();
        jsonPromise.then((data))
    })
}
export default DemoCard;
