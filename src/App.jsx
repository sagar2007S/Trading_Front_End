import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Page/SignUp.jsx";
import LoginPage from "./Page/LoginPage.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Dashboard />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <LoginPage />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
