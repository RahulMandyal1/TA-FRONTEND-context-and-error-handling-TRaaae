import Card from "./Card";
import { useContext } from "react";
import { DarkModeContext } from "./Usercontext";

function Cards() {
  const {isDarkMode} = useContext(DarkModeContext);
  return (
    <div className="cards_wrap">
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
    </div>
  );
}

export default Cards;
