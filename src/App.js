import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ArticulesList from "./components/articules/articulesList/ArticulesList.jsx";
import NewArticulePage from "./components/articules/newArticule/NewArticulePage.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Header from "./components/layout/header/Header.jsx";
import { AuthContextProvider } from "./components/login/context.js";
import CreateUserPage from "./components/login/CreateUserPage.jsx";
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
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/articules" />}></Route>
          <Route path="/articules">
            <Route index element={<ArticulesList></ArticulesList>}></Route>
          </Route>
          <Route path="/new-articule" element={<NewArticulePage/>}></Route>
          <Route path="/createAccount" element={<CreateUserPage />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

          <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
