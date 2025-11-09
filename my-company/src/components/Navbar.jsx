import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#036',
    padding: '10px 20px',
    display: 'flex',
    gap: '15px',
    justifyContent: 'space-around'   // <-- add this exact key
  };

  const linkStyle = { color: 'white', textDecoration: 'none' };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
