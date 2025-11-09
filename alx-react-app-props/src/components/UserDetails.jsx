// alx-react-app-props/src/components/UserDetails.jsx
import React, { useContext } from 'react'; // Import useContext hook
import UserContext from '../context/UserContext'; // Import the context

function UserDetails() {
  // Consume the context directly using useContext hook
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details (Context API)</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
