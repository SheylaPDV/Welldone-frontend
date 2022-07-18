export default function UpdateUserForm({ user }) {
  return (
    <>
      <div className="articule-box">
        <input value={user.name}></input>
        <input value={user.surname}></input>
        <input value={user.username}></input>
        <input value={user.email}></input>
        <input type="password" value={user.password}></input>
      </div>
    </>
  );
}
