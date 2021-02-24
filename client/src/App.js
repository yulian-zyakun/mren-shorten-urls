import React from "react";
import "materialize-css";
import { useRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Footer } from "./components/Footer";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <BrowserRouter>
        <body>
          {isAuthenticated && <Navbar />}
          <main>
            <div className="container">{routes}</div>
          </main>
          <Footer />
        </body>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
