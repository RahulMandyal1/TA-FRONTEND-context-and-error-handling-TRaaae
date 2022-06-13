import { useContext } from "react";
import { DarkModeContext } from "./Usercontext";

function Header() {
  const {isDarkMode} = useContext(DarkModeContext);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
