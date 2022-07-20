import { useTranslation } from "react-i18next";
import useForm from "../../hooks/useForm";

function CreateUserForm({ onSubmit }) {
  const { t } = useTranslation();
  const {
    formValue: newUser,
    handleChange,
    handleSubmit,
  } = useForm({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, surname, username, email, password } = newUser;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="loginPage">
      <h2 className="loginPage-title">{t("createuser.title")}</h2>
      <label className="label-input">{t("createuser.name")}</label>
      <div className="input-group">
        <input
          className="input"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <label className="label-input">{t("createuser.surname")}</label>
      <div className="input-group">
        <input
          className="input"
          name="surname"
          value={surname}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>
      <label className="label-input">{t("createuser.username")}</label>

      <div className="input-group">
        <input
          className="input"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>
      <label className="label-input">{t("createuser.email")}</label>
      <div className="input-group">
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <label className="label-input">{t("createuser.password")}</label>

      <div className="input-group">
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <button className="button-login">{t("createuser.create-account")}</button>

      <a href="/LoginHelp">
        <h5> {t("createuser.help2")}</h5>
      </a>
    </form>
  );
}

export default CreateUserForm;
