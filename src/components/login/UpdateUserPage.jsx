import { useEffect, useState } from "react";
import useMutation from "../../hooks/useMutation";
import storage from "../../utils/storage";
import { useAuth } from "./context";
import { getUserId, getUsers } from "./service";
import UpdateUserForm from "./UpdateUserForm";

export default function UpdateUserPage() {
  const [users, setUsers] = useState([]);
  const { isLogged, handleLogout } = useAuth();

  useEffect(() => {
    getUserId().then((data) => {
      setUsers(data.result);
    });
  }, []);

  return isLogged ? (
    <>
      <div>
        <h1>Usuarios</h1>
        {users.length ? (
          users.map((user) => <UpdateUserForm key={user.id} user={user} />)
        ) : (
          <h1>No hay usuarios</h1>
        )}
      </div>
    </>
  ) : (
    <h1>hola</h1>
  );
}
