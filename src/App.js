import { Routes, Route, Navigate } from "react-router-dom";
import ArticulesList from "./components/articules/articulesList/ArticulesList.jsx";
import LoginPage from "./components/login/LoginPage.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello World, Hello compis</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/articules" />}></Route>
        <Route path="/articules">
          <Route index element={<ArticulesList></ArticulesList>}></Route>
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="/404" element={<div> 404 | Not found Page</div>}></Route>
        <Route path="*" element={<Navigate to="/404" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
