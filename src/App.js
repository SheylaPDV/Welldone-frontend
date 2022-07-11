import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ArticulesList from "./components/articules/articulesList/ArticulesList.jsx";
import { AuthContextProvider } from "./components/login/context.js";
import LoginPage from "./components/login/LoginPage.jsx";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };
  return (
    <div className="App">
      <h1>Hello World, Hello compis</h1>
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/" element={<Navigate to="/articules" />}></Route>
          <Route path="/articules">
            <Route index element={<ArticulesList></ArticulesList>}></Route>
          </Route>

          <Route path="/login" element={<LoginPage />} />

          <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
