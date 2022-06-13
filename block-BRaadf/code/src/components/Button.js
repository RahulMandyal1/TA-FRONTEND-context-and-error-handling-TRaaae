import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "./Usercontext";
export default function SwitchButton() {
  let data= useContext(DarkModeContext);
  console.log(data);
  return (
    <button
      className={`btn ${data.isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={data.changeMode}
    >
      {data.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
