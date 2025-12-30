import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Page/SignUp.jsx";
import LoginPage from "./Page/LoginPage.jsx";
//import TradingUserDashboard from "./Page/TradingUserDashBoard.jsx";
import TradingUserDashboard from "./Page/TradingUserDashboard.jsx";
import NavBar from "./Page/NavBar.jsx";
import DashBoardSidebar from "./Page/DashBoardSideBar.jsx";
import Layout from "./Page/Layout.jsx";
import AccountHeader from "./Page/AccountHeader.jsx";
import EquityChart from "./Page/EquityChart.jsx";
import AccountDashBoard from "./Page/AccountDashBoard.jsx";
import AccountWithdrwalForm from "./Page/AccountWithdrwalForm.jsx";
import TransfersComponent from "./Page/TransfersComponent.jsx";
import MakeDepositComponent from "./Page/MakeDepositComponent.jsx";
import TicketsComponent from "./Page/TicketComponent.jsx";
import MessagingInterface from "./Page/MessageInterface/MessagingInterface.jsx";
import MyProfile from "./Page/UserProfile/MyProfile.jsx";



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
    {
      // for test purpose path is test
      path: "/user",
      element: <Layout />,
      children: [
        {
          index:true,
          element: <TradingUserDashboard />,
        },
        {
          path: "/user/createaccount",
          element: <AccountHeader />,
        },
        {
          path:"/user/myprofile",
          element:<MyProfile/>
        },
        {
          path:"/user/account",
          element:<AccountDashBoard/>
        },
        {
        path:"/user/deposit",
        element:<MakeDepositComponent/>

        },
        {
          path:"/user/withdraw",
          element:<AccountWithdrwalForm/>
        },
        {
      
          path:"/user/transfersReport",
          element:<TransfersComponent/>
        },
        {
          path:"/user/ticket",
          element:<TicketsComponent/>
        },
        {
          path:"/user/ticket/message",
          element:<MessagingInterface/>
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
