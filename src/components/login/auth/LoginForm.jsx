import useForm from "../../../hooks/useForm";
import "../../layout/header/header.css";
import "./loginPage.css";

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: "",
    username: "",
    password: "",
    remember: false,
  });
  const { username, email, password, remember } = credentials;

  return (
    <div className="loginPage">
      <h2 className="loginPage-title">Log in to Welldone</h2>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="label-input">Email</label>
        <div className="input-group">
          <input
            className="input"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <span className="border"></span>
        </div>

        <label className="label-input">Username</label>
        <div className="input-group">
          <input
            className="input"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <span className="border"></span>
        </div>

        <label className="label-input">Password</label>
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

        <label className="label-input">Remember password</label>
        <input
          className="label-input"
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />

        <button
          className="button"
          disabled={!validate(validEmail, validPassword)}
        >
          Login
        </button>
        <a href="/createAccount">
          <h5>No account? Create one</h5>
        </a>
        <a href="/LoginHelp">
          <h5>Need help?</h5>
        </a>
      </form>
    </div>
  );
}
export default LoginForm;
