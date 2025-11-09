function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      textAlign: 'center', 
      padding: '20px',
      marginTop: '30px',
      borderTop: '4px solid #3498db'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ textAlign: 'left' }}>
          <h3 style={{ 
            color: '#3498db', 
            marginBottom: '10px',
            fontSize: '1.3rem'
          }}>Travel Explorer</h3>
          <p style={{ 
            fontSize: '0.9rem', 
            opacity: '0.8',
            margin: 0
          }}>Discover the world's most beautiful cities</p>
        </div>
        
        <div style={{ textAlign: 'right' }}>
          <p style={{ 
            margin: '5px 0',
            fontSize: '0.9rem'
          }}>Contact: info@travelexplorer.com</p>
          <p style={{ 
            margin: '5px 0',
            fontSize: '0.9rem'
          }}>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '15px', 
        paddingTop: '15px',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <p style={{ 
          margin: 0, 
          fontSize: '0.8rem',
          opacity: '0.7'
        }}>
          © 2024 Travel Explorer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
