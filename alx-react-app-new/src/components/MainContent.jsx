function MainContent() {
  return (
    <main style={{ 
      minHeight: '400px',
      padding: '30px',
      backgroundColor: '#ecf0f1',
      margin: '0 20px 20px 20px',
      borderRadius: '8px',
      border: '1px solid #bdc3c7'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '25px',
        fontSize: '2rem'
      }}>Welcome to Our Travel App</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px' 
      }}>
        <div style={{ 
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#3498db' }}>Featured Destinations</h3>
          <p>Discover amazing places to visit and make unforgettable memories.</p>
        </div>
        
        <div style={{ 
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#e74c3c' }}>Travel Tips</h3>
          <p>Get the best travel advice from our experts.</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
