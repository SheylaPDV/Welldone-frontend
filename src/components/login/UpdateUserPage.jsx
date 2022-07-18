import { useEffect, useState } from "react";
import useMutation from "../../hooks/useMutation";
import storage from "../../utils/storage";
import { useAuth } from "./context";
import { getUserId, getUsers } from "./service";
import UpdateUserForm from "./UpdateUserForm";
import jwt_decode from "jwt-decode";
export default function UpdateUserPage() {
  const [users, setUsers] = useState([]);

  var token = storage.get("auth");
  var decoded = jwt_decode(token);
  const { id } = decoded;

  console.log(id);
  useEffect(() => {
    getUserId(id).then((data) => {
      setUsers(data);
    });
  }, [id]);

  console.log(users);

  return (
    <>
      <div>
        <h1>Usuarios</h1>
        {users ? <UpdateUserForm user={users} /> : <h1>No hay usuarios</h1>}
      </div>
    </>
  );
}
