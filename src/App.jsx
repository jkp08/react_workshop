import { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useAsyncError,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import PrivateRoutes from "./utils/PrivateRoutes";
import PushRoutes from "./utils/PushRoutes";
import AuthContextProvider, { AuthContext } from "./contexts/AuthContext";

//layouts
import Common from "./layouts/Common";
// pages
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
  const { activeUser, setActiveUser } = useContext(AuthContext);

  useEffect(() => {
    let userData = localStorage.getItem("userData");
    if (userData !== null) {
      setActiveUser(JSON.parse(userData));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Common>
              <PrivateRoutes />
            </Common>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<PushRoutes />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
