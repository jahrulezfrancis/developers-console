import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Person from '@mui/icons-material/Person';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Paper from '@mui/material/Paper';
import Home from '@mui/icons-material/Home';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction href='/home' label="Home" icon={<Home />} />
          <BottomNavigationAction href='/bookmark' label="Bookmarks" icon={<BookmarksIcon />} />
          <BottomNavigationAction href='/profile' label="Account" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
