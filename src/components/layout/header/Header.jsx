import { t } from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import i18n from "i18next";
import LogoutButton from "../../login/auth/LogoutButton";
import "./header.css";

function Header() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState("es");
  const onChangeLanguage = () => {
    i18n.changeLanguage(language);
    if (language === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  };
  return (
    <header className="Header">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "green" } : null)}
      >
        <h1 className="title-header">
          <i>{t("header.welldone")}</i>
        </h1>
        <h3 className="title-header2">
          <i>{t("header.stay-curious")}</i>
        </h3>
      </NavLink>
      <button onClick={onChangeLanguage}>EN/ES</button>

      <nav className="header-nav">
        {/* <NavLink to="/login">
          <button className="button">Login</button>
        </NavLink> */}
        <LogoutButton className="button" />

        {/* <NavLink to="/adverts/blog">
          <button className="button">create Account</button>
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
