import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css"; // Import the CSS file
import MarkdownEditor from "./pages/MarkdownEditor";
import Repo from "./pages/Repo";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router basename="/my-portfolio">
      <div className="App">
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink exact to="/" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>Home</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>Resume</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/repo" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>Repos</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>Blogs</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>Contact</span>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/mdEditor" className="nav-link">
                {({ isActive, isPending, isTransitioning }) => (
                  <span className={isActive ? "active-link" : ""}>
                    MDEditor
                  </span>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/repo" element={<Repo />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mdEditor" element={<MarkdownEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
