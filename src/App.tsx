import CourseList from "./pages/CourseList";
import Login from "./pages/Login";
import CssBaseline from "@mui/material/CssBaseline";
import Nav from "./pages/Nav";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = (name: string) => {
    setCurrentUser(name);
  };

  const logout = () => {
    setCurrentUser("");
  };

  return (
    <>
      <CssBaseline />
      <Nav
        user={currentUser}
        logout={logout}
      >
        {currentUser ? (
          <CourseList user={currentUser} />
        ) : (
          <Login login={login} />
        )}
      </Nav>
    </>
  );
}

export default App;
