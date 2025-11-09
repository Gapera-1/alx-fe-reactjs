function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #e0e0e0', 
      padding: '20px', 
      margin: '15px', 
      borderRadius: '10px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s ease-in-out'
    }}>
      <h2 style={{ 
        color: '#2c3e50', 
        fontSize: '1.8rem',
        marginBottom: '10px',
        borderBottom: '2px solid #3498db',
        paddingBottom: '5px'
      }}>{props.name}</h2>
      <p style={{ 
        fontSize: '1.1rem', 
        margin: '8px 0',
        color: '#34495e'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold', 
          color: '#e74c3c',
          fontSize: '1.2rem'
        }}>{props.age}</span>
      </p>
      <p style={{ 
        fontSize: '1rem', 
        lineHeight: '1.5',
        color: '#7f8c8d',
        fontStyle: 'italic'
      }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
