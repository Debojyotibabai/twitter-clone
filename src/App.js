import React from "react";

// css
import "./App.css";

// component
import Sidebar from "./Component/Sidebar";
import PostSection from "./Component/PostSection";
import Widget from "./Component/Widget";

const App = () => {
  return (
    // main section
    <div className="main__section">
      {/* sidebar */}
      <Sidebar />

      {/* post section */}
      <PostSection />

      {/* widgets */}
      <Widget />
    </div>
  );
};

export default App;
