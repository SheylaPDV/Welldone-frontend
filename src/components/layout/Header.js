import logo from "../../assets/images/tecnologia.png";
import "../layout/header.css";
import Button from "../common/Button";
function Header() {
  return (
    <header className="card">
      {/* <div className="header"> */}
      <div className="welldone">
        <h1 className="title">Welldone</h1>
        <h3 className="title">Stay curious.</h3>
      </div>

      <Button />
      {/* </div> */}
      {/* <a href="/">Our story</a>
      <a href="/">Sign In</a>

      <a href="/">Membership</a>
      <a href="/">Write</a> */}
    </header>
  );
}
export default Header;
