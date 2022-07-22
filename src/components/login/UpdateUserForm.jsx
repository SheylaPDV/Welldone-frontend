import useForm from "../../hooks/useForm";
import "../layout/header/header.css";
import "./updateUser.css";
export default function UpdateUserForm({ user, onSubmit }) {
  // const _id = user._id;
  console.log("user", user);
  const {
    formValue: modify,
    handleChange,
    handleSubmit,
  } = useForm({
    _id: user._id,
    name: user.name,
    surname: user.surname,
    username: user.username,
    email: user.email,
  });

  const { name, surname, username, email } = modify;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="loginPage">
        <h4>Name:</h4>
        <label>{user.name}</label>

        {/* <input id="_id" value={user._id}></input> */}
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

        {/* <h4>Old Password:</h4> */}

        {/* <input
          onChange={handleChange}
          name="password"
          value={oldPassword}
        ></input>
        <h4>New Password:</h4>

        <input
          onChange={handleChange}
          name="password"
          value={newPassword}
        ></input> */}
        <button className="button" type="onSubmit">
          Edit
        </button>
      </form>
    </>
  );
}
