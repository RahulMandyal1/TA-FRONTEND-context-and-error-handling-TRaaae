import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { DarkModeContext } from "./Usercontext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };

  render() {
    let { isDarkMode } = this.state;
    const data = {
      isDarkMode: this.state.isDarkMode,
      changeMode: this.changeMode,
    };
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <DarkModeContext.Provider value={data}>
          <Header/>
          <Main/>
          <SwitchButton />
        </DarkModeContext.Provider>
      </div>
    );
  }
}

export default App;
