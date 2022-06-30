import Header from "./components/layout/Header";
import "./index.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
      <Header />
      {/* <Route path="/login" element={<LoginPage />} /> */}

      {/* <LoginPage /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
