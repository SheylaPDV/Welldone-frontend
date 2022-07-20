import useForm from "../../hooks/useForm";

export default function UpdateUserForm({ user, onSubmit }) {
  const {
    formValue: modifyUser,
    handleChange,
    handleSubmit,
  } = useForm({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
  });
  const { name, surname, username, email, password } = modifyUser;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="loginPage">
        <h4>Name:</h4>
        <label>{user.name}</label>

        <input onChange={handleChange} name="name" value={name}></input>

        <h4>Surname:</h4>
        <label>{user.surname}</label>
        <input onChange={handleChange} name="surname" value={surname}></input>

        <h4>Username:</h4>
        <label>{user.username}</label>

        <input onChange={handleChange} name="username" value={username}></input>

        <h4>Email:</h4>
        <label>{user.email}</label>

        <input onChange={handleChange} name="email" value={email}></input>

        <h4>Old Password:</h4>

        {/* <input onChange={handleChange} name="password"></input>
        <h4>New Password:</h4>

        <input onChange={handleChange} name="password"></input> */}
        <button onClick={handleChange}>Edit</button>
      </form>
    </>
  );
}
