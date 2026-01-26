import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

const PostByUser = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

  // useri apidan getirir
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUsers();
  }, []);


  // secilen user deyisende
  useEffect(() => {
    if (!selectedUserId) {
      setSelectedUser(null);
      return;
    }

    const user = users.find(
      u => u.id === Number(selectedUserId)
    );

    setSelectedUser(user ?? null);
  }, [selectedUserId, users]);

  return (
    <div>
      <h2>User Məlumatları</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <select
        value={selectedUserId}
        onChange={e => setSelectedUserId(e.target.value)}
      >
        <option value="">Seçin</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && (
        <div style={{ marginTop: 10, border: "1px solid #ccc", padding: 10 }}>
          <h3>{selectedUser.name}</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Şəhər:</strong> {selectedUser.address?.city}</p>
          <p><strong>Şirkət:</strong> {selectedUser.company?.name}</p>
        </div>
      )}
    </div>          
  );
};

export default PostByUser;
