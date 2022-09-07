import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './AppBar';
import FixedBottomNavigation from './BottomNav';
import DemoCard from './Components/Interface/axiosDemo';
import { Bookmark, Home, ProfilePage } from './Components/Interface/Routes';
import PageNotFound from './Components/Pages/404Error';
import { UserLoginTab } from './Components/Pages/SignUp';

function App() {
  return (
    <div>
      <NavigationBar />
      <FixedBottomNavigation />
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='bookmark' element={<Bookmark />} />
        <Route path='profile' element={<UserLoginTab />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;