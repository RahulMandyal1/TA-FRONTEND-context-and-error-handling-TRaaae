import { useContext } from "react";
import { DarkModeContext } from "./Usercontext";

function Title() {
  const {isDarkMode} = useContext(DarkModeContext)
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
    </h2>
  );
}

export default Title;
