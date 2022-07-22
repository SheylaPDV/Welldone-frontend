import useForm from "../../hooks/useForm";
import "../layout/header/header.css";
import "../login/auth/loginPage.css";
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
      <form className="update-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <i>
            <h4>Name: {user.name}</h4>
          </i>
        </label>

        {/* <input id="_id" value={user._id}></input> */}
        <input onChange={handleChange} name="name" value={name}></input>

        <label>
          <i>
            {" "}
            <h4>Surname: {user.surname}</h4>{" "}
          </i>
        </label>
        <input onChange={handleChange} name="surname" value={surname}></input>

        <label>
          <i>
            <h4>Username: {user.username}</h4>
            Your name appears on your Profile page, as your byline, and in your
            responses. It is a required field.
          </i>
        </label>

        <input onChange={handleChange} name="username" value={username}></input>
        <label>
          <i>
            <h4>Email: {user.email}</h4>
          </i>
        </label>

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
        <button className="button-edit" type="onSubmit">
          <i>Edit</i>
        </button>
      </form>
    </>
  );
}
