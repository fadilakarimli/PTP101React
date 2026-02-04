import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div>
      <h2>Profile</h2>
      <p>Welcome <b>{user.username}</b></p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
