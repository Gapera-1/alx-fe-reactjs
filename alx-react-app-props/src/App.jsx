import { useState } from 'react';
import UserContext from './components/UserContext';
import ProfilePage from './components/ProfilePage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [userData, setUserData] = useState({ 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  });

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Header />
        <ProfilePage />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;