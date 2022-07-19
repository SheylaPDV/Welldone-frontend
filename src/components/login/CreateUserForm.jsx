import useForm from "../../hooks/useForm";

function CreateUserForm({ onSubmit }) {
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
      <h2 className="loginPage-title">Sign Up for WellDone</h2>
      <label className="label-input">Name</label>
      <div className="input-group">
        <input
          className="input"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <span className="border"></span>
      </div>

      <label className="label-input">Surname</label>
      <div className="input-group">
        <input
          className="input"
          name="surname"
          value={surname}
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
      <label className="label-input">Email</label>
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
      <a href="/createdAccount">
        <button className="button-login">Create Account</button>
      </a>

      <a href="/LoginHelp">
        <h5>Need help?</h5>
      </a>
    </form>
  );
}

export default CreateUserForm;
