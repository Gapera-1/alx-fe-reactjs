import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <Header />
      
      {/* Counter Section */}
      <h1 style={{ color: '#333' }}>React Counter App</h1>
      <Counter />
      
      {/* User Profiles Section */}
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <UserProfile 
          name="John Doe" 
          age={28} 
          bio="Travel enthusiast who loves exploring new cultures and cuisines."
        />
        <UserProfile 
          name="Sarah Smith" 
          age={32} 
          bio="Adventure seeker with a passion for mountain trekking."
        />
      </div>
      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
