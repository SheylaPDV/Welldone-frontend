import useForm from "../../hooks/useForm";

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
    <div>
      <h2 className="loginPage-title">Log in to Welldone</h2>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="loginForm-field"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="loginForm-field"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <input
          className="loginForm-field"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label>Remember password</label>
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />

        <button
          className="loginForm-submit"
          disabled={!validate(validEmail, validPassword)}
        >
          Login
        </button>
        <a href="/LoginHelp">
          <h5>Need help?</h5>
        </a>
      </form>
    </div>
  );
}
export default LoginForm;
