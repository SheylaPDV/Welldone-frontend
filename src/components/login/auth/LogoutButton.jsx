import { NavLink } from "react-router-dom";
import { logout } from "../service";
import useMutation from "../../../hooks/useMutation";
import { AuthContextConsumer, useAuth } from "../context";
import "../../layout/header/header.css";

function LogoutButton({ className }) {
  const { isLogged, handleLogout } = useAuth();
  const mutation = useMutation(logout);
  const handleLogoutClick = async () => {
    await mutation.execute();
    handleLogout();
  };

  return isLogged ? (
    <>
      <NavLink to="/login">
        <button className={className} onClick={handleLogoutClick}>
          Logout
        </button>
      </NavLink>
      <NavLink to="/articules">
        <button className="button-home">Home</button>
      </NavLink>
      <NavLink to="/new-story">
        <button className="button-write">Write</button>
      </NavLink>
      <NavLink to="/settings">
        <button className="button-write">Edit profile</button>
      </NavLink>
    </>
  ) : (
    <NavLink to="/login">
      <button className={className}>Login</button>
    </NavLink>
  );
}

const ConnectedAuthButton = (props) => (
  <AuthContextConsumer>
    {(auth) => <LogoutButton {...auth} {...props} />}
  </AuthContextConsumer>
);
export default ConnectedAuthButton;
