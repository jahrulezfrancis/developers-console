import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AxiosDemo() {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [postItem, setpostItem] = useState(null);
    const newPost = null;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setpostItem(response.data)
            })
    }, [url]);
    return (
        <div>
            {newPost}
        </div>
    )
}
