import logo from "../../assets/images/tecnologia.png";
import "../layout/header.css";
import Button from "../common/Button";
function Header() {
  return (
    <header className="card">
      {/* <div className="header"> */}
      <div className="welldone">
        <span className="title">
          <i>Welldone</i>
        </span>
        <h3 className="subtitle">
          <i>Stay curious..</i>
        </h3>
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
