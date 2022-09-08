import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'ID', width: 20 },
    {
        field: 'PostAuthor',
        headerName: 'Post Author',
        width: 100,
        editable: true,
    },
    {
        field: 'Thread',
        headerName: 'Thread',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
];

const rows = [
    { id: 1, Thread: 'How to become a developer', PostAuthor: 'Jon', age: 35 },
    { id: 2, Thread: 'Whats every programmer should do', PostAuthor: 'Cersei', age: 42 },
    { id: 3, Thread: 'Advice for developer in their 20\'s', PostAuthor: 'Jaime', age: 45 },
    { id: 4, Thread: 'Books for developers', PostAuthor: 'Arya', age: 16 },
    { id: 5, Thread: 'How to pitch an idea and sell your projects', PostAuthor: 'Daenerys', age: null },
    { id: 6, Thread: 'Digital marketing for beginners', PostAuthor: null, age: 150 },
    { id: 7, Thread: 'How to start small and end big', PostAuthor: 'Ferrara', age: 44 },
    { id: 8, Thread: 'Best exercise for the brain', PostAuthor: 'Rossini', age: 36 },
    { id: 9, Thread: 'you can start small no matter how little', PostAuthor: 'Harvey', age: 65 },
];

export default function BookmarkPage() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
    );
}
