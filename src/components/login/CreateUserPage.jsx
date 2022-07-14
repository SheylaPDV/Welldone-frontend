// import { Navigate, useNavigate } from "react-router-dom";
// import { createUser } from "./service";
// import CreateUserForm from "./CreateUserForm.jsx";
// import useMutation from "../../hooks/useMutation";

import CreateUserForm from "./CreateUserForm";

// function CreateUserPage() {
//   const navigate = useNavigate();
//   const mutation = useMutation(createUser);

//   const handleSubmit = (newUser) => {
//     mutation.execute(newUser).then(({ id }) => navigate(`/v1/user/${id}`));
//   };

//   if (mutation.error?.statusCode === 401) {
//     return <Navigate to="/login" />;
//   }

//   return (
//     <>
//       <h4>
//         Ad upload
//         <CreateUserForm onSubmit={handleSubmit} />
//       </h4>
//     </>
//   );
// }

// export default CreateUserPage;
import { useLocation, useNavigate } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { createUser } from "./service";
import { useState } from "react";

function CreateUserPage() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    const user = Object.assign();
  };
  return (
    <div>
      <CreateUserForm onSubmit={handleSubmit} />
      {isLoading && <p>Welldone..</p>}
      {error && <div onClick={resetError}>{error.message}</div>}
    </div>
  );
}
export default CreateUserPage;
