import { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //to modify dark mode

  const handleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [alert, setAlert] = useState(null);

  const popAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar
        title="textUtils"
        about="About US"
        mode={mode}
        handleDarkMode={handleDarkMode}
      />
      <div className="container my-3">
        <Alert alert={alert} />
        {/* <Router>
        <Navbar
          title="textUtils"
          about="About US"
          mode={mode}
          handleDarkMode={handleDarkMode}
        />
        <Alert alert={alert} /> */}

        <TextForm
          heading="Enter the Text to Analyse"
          mode={mode}
          popAlert={popAlert}
        />

        {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the Text to Analyse"
                  mode={mode}
                  popAlert={popAlert}
                />
              }
            />
          </Routes> */}
      </div>
      {/* <About mode={mode} /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
