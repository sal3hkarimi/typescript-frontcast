import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/Auth/AuthContext";

function Header() {
  const auth = useContext(AuthContext);

  const login = () => {
    auth?.setUser({
      name: "amin",
      email: "amin@gmail.com",
    });
  };

  const logout = () => {
    auth?.setUser(null);
  };

  return (
    <div>
      <h1>
        Sabzlearn Header |{auth && auth.user?.name}
        {auth?.user?.email}
      </h1>
    </div>
  );
}

export default Header;
