import CreateUserForm from "./CreateUserForm";

import { useLocation, useNavigate } from "react-router-dom";
import useMutation from "../../hooks/useMutation";
import { createUser } from "./service";

function CreateUserPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, error, execute, resetError } = useMutation(createUser);

  const handleSubmit = (credentials) => {
    execute(credentials).then(() => {
      const from = location.state?.from?.pathname || "/createBlog";
      navigate(from, { replace: true });
    });
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
