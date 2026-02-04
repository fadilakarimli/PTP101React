import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Home</h1>

      {!user ? (
        <>
          <h2>Welcome 👋</h2>
          <Link to="/register">Register</Link> |{" "}
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <h2>Hello {user.username} 👋</h2>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Home;
