// alx-react-app-props/src/components/UserInfo.jsx
import UserDetails from './UserDetails';

function UserInfo() { // Removed { userData } prop
  return <UserDetails />; // Removed userData={userData} prop
}

export default UserInfo;
