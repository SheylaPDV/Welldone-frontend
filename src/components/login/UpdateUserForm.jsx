import useForm from "../../hooks/useForm";

export default function UpdateUserForm({ user, onSubmit }) {
  const {
    formValue: modify,
    handleChange,
    handleSubmit,
  } = useForm({
    _id: "",
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, surname, username, email, password } = modify;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="loginPage">
        <h4>Name:</h4>
        <label>{user.name}</label>

        <label> {user._id}</label>

        <input
          onChange={handleChange}
          id="name"
          name="name"
          value={name}
        ></input>

        <h4>Surname:</h4>
        <label>{user.surname}</label>
        <input
          onChange={handleChange}
          id="surname"
          name="surname"
          value={surname}
        ></input>

        <h4>Username:</h4>
        <label>{user.username}</label>

        <input
          onChange={handleChange}
          id="username"
          name="username"
          value={username}
        ></input>

        <h4>Email:</h4>
        <label>{user.email}</label>

        <input
          onChange={handleChange}
          id="email"
          name="email"
          value={email}
        ></input>

        <h4>Old Password:</h4>

        {/* <input onChange={handleChange} name="password"></input>
        <h4>New Password:</h4>

        <input onChange={handleChange} name="password"></input> */}
        <button type="onSubmit">Edit</button>
      </form>
    </>
  );
}
