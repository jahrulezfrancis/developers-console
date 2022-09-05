import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './AppBar';
import FixedBottomNavigation from './BottomNav';
import { Bookmark, Home, ProfilePage } from './Components/Interface/Routes';

function App() {
  return (
    <div>
     <NavigationBar />
     <FixedBottomNavigation />
     <Routes>
      <Route path='home' element={<Home />}></Route>
      <Route path='bookmark' element={<Bookmark />}></Route>
      <Route path='profile' element={<ProfilePage />}></Route>
     </Routes>
    </div>
  )
}

export default App;