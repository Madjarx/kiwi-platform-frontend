// modules
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

// components
import Marketplace from "./components/marketplace/Marketplace";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Settings from "./components/settings/Settings";
import Home from "./components/home/Home";
import NotFound from "./components/notfound/NotFound";

// styling
import "./App.css";

// temporary imports
import widgetData from './components/marketplace/widgetData'

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div className="Sidebar">
            <Sidebar />
          </div>
          <div className="Content">
            {/* <main> */}
              <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/marketplace" exact element={<Marketplace items={widgetData}/>} />
              <Route path="/settings" exact element={<Settings />} />
              {/* <NotFound /> */}
              </Routes>
            {/* </main> */}
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
