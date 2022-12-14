import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Person from '@mui/icons-material/Person';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Paper from '@mui/material/Paper';
import Home from '@mui/icons-material/Home';
import { Link as RouterLink } from 'react-router-dom';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(null);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'white', zIndex: '20' }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={ RouterLink } to="home" label="Home" icon={<Home />} />
          <BottomNavigationAction component={ RouterLink } to="bookmark" label='Bookmark' icon={<BookmarksIcon />} />
          <BottomNavigationAction component={ RouterLink } to='/profile' label="Account" icon={<Person />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
