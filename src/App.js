import { useContext } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { Home, LeftBAr, Navbar, Profile, RightBar } from "../src/exportDefault";
import "./App.css";
// import { AuthContext } from "./context/AuthContext";
import { DarkModContext } from "./context/darkModContext";
import "./style.scss";

/*=======================================================*/
/*=======================================================*/
/*=======================================================*/

function App() {
  const { darkMod } = useContext(DarkModContext);
  // const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      // put classname [dark or light mood] depend of the context
      <div className={`theme-${!darkMod ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBAr />
          <div style={{ flex: "6" }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // protect route if no user found in localstorage , open the login page
  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
