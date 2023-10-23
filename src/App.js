import React from "react";
import "./app.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
function App() {
  return (
    <div className="app">
      {/* */}
      <Header />
      {/* side bar */}
      <div className="app__body">
        <Sidebar />
      </div>

      {/*  */}
      {/*  */}
    </div>
  );
}

export default App;
