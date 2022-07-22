import { useEffect, useState } from "react";
import useMutation from "../../hooks/useMutation";
import storage from "../../utils/storage";
// import { useAuth } from "./context";
import { getUserId, modifyUser } from "./service";
import UpdateUserForm from "./UpdateUserForm";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import "./updateUser.css";

export default function UpdateUserPage() {
  const [users, setUsers] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { execute } = useMutation(modifyUser);

  const handleSubmit = (credentials) => {
    execute(credentials).then(() => {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    });
  };

  const token = storage.get("auth");
  const decoded = jwt_decode(token);
  const { id } = decoded;

  useEffect(() => {
    getUserId(id).then((data) => {
      setUsers(data);
    });
  }, [id]);

  return (
    <>
      <div>
        <h1 className="about-you">
          <i>About you..</i>
        </h1>
        {users ? (
          <UpdateUserForm onSubmit={handleSubmit} user={users} />
        ) : (
          <h1>There are no users</h1>
        )}
      </div>
    </>
  );
}
