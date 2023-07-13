import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage";
import "antd/dist/antd.css";
import Spinner from "Components/spinner/Spinner";
import { routes } from "Routes/routes";

function App() {
  return (
    <div className="App">
      <Spinner />
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component }, index) => {
            return <Route key={index} path={path} element={component} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
