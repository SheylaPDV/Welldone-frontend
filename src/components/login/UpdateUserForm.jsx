export default function UpdateUserForm({ user }) {
  return (
    <>
      <div className="articule-box">
        <label>Name:</label>
        <input name="name" value={user.name}></input>

        <label>Surname:</label>

        <input name="surname" value={user.surname}></input>

        <label>Username:</label>

        <input name="username" value={user.username}></input>

        <label>Email:</label>

        <input name="email" value={user.email}></input>

        <label>Old Password:</label>

        <input name="password"></input>
        <label>New Password:</label>

        <input name="password"></input>
        <button>Edit</button>
      </div>
    </>
  );
}
