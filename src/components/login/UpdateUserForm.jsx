export default function UpdateUserForm({ user }) {
  console.log("user", user);
  return (
    <>
      <div className="articule-box">
        <input value={user._id}></input>

        <input value={user.name}></input>
        <input value={user.surname}></input>
        <input value={user.username}></input>
        <input value={user.email}></input>
        <input type="password" value={user.password}></input>
      </div>
    </>
  );
}
