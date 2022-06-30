function LoginPage() {
  return (
    <div>
      <h1> Log In to welldone</h1>
      <form className="loginForm">
        <label>
          Name
          <input>Name</input>
          <input>Apellidos</input>
          <input>Email address</input>
          <input>Nickname</input>
          <input>Password</input>
        </label>
      </form>
    </div>
  );
}

export default LoginPage;
