// alx-react-app-props/src/components/ProfilePage.jsx
import UserInfo from './UserInfo';

function ProfilePage() { // Removed { userData } prop
  return <UserInfo />; // Removed userData={userData} prop
}

export default ProfilePage;
