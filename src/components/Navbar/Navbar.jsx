import React, { useContext } from "react";
import { Menu, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import "./Navbar.module.css";
import { ThemeContext } from "../../context/ThemeContet";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Menu inverted={theme === "dark"} fixed="top" className="navbar">
      <Menu.Item as={NavLink} exact to="/">
        Home
      </Menu.Item>
      <Menu.Item as={NavLink} to="/resume">
        Resume
      </Menu.Item>
      <Menu.Item as={NavLink} to="/blog">
        Blog
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Button icon onClick={toggleTheme}>
            <Icon name={theme === "light" ? "moon" : "sun"} />
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
