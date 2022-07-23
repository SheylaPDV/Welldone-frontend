import { NavLink } from "react-router-dom";
import { logout } from "../service";
import useMutation from "../../../hooks/useMutation";
import { AuthContextConsumer, useAuth } from "../context";
import "../../layout/header/header.css";
import { useTranslation } from "react-i18next";

function LogoutButton({ className }) {
  const { t } = useTranslation();

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
          <i>{t("logout.button")}</i>
        </button>
      </NavLink>
      <div className="buttons">
        <NavLink to="/articules">
          <button className="button-settings">
            <i>{t("login.home")}</i>
          </button>
        </NavLink>
        <NavLink to="/new-articule">
          <button className="button-settings">
            <i>{t("login.write")}</i>
          </button>
        </NavLink>
        <NavLink to="/settings">
          <button className="button-settings">
            <i>{t("login.edit")}</i>
          </button>
        </NavLink>
      </div>
    </>
  ) : (
    <NavLink to="/login">
      <button className={className}>
        <i>{t("login.button")}</i>
      </button>
    </NavLink>
  );
}

const ConnectedAuthButton = (props) => (
  <AuthContextConsumer>
    {(auth) => <LogoutButton {...auth} {...props} />}
  </AuthContextConsumer>
);
export default ConnectedAuthButton;
