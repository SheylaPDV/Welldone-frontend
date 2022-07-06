import { useEffect, useState } from "react";
import "./LoginPage.css";
export default function LoginPage() {
  return (
    <>
      <h2 className="loginPage-title">Log in to Welldone</h2>
      <form className="loginForm">
        <input className="loginForm-field" name="email" />
        <input
          className="loginForm-field"
          //   className="formField-label"
          type="password"
          name="password"
        />

        <input type="checkbox" name="remember" />
        <label>Remember password</label>
        <button className="loginForm-submit">Login</button>
        <a href="/LoginHelp">
          <h5>Need help?</h5>
        </a>
      </form>
    </>
  );
}
