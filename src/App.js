import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './AppBar';
import FixedBottomNavigation from './BottomNav';
import MediaControlCard, { Bookmark, Profile } from './Components/Interface/MusicCard';

function App() {
  return (
    <div>
     <NavigationBar />
     <FixedBottomNavigation />
     <Routes>
      <Route path='home' element={<MediaControlCard />}></Route>
      <Route path='bookmark' element={<Bookmark />}></Route>
      <Route path='profile' element={<Profile />}></Route>
     </Routes>
    </div>
  )
}

export default App;