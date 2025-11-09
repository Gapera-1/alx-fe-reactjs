// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function UserProfile() {
  const { name, email } = useContext(UserContext);

  return (
    <section>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </section>
  );
}
