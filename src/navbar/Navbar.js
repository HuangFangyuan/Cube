import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

export default class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["db"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="jobs">
          <Link to="/jobs">Jobs</Link>
        </Menu.Item>
        <Menu.Item key="model"><Link to="/model">Model</Link></Menu.Item>
        <Menu.Item key="db">
          <Link to="/db">DB</Link>
        </Menu.Item>
        <Menu.Item key="report"><Link to="/report">Report</Link></Menu.Item>
      </Menu>
    );
  }
}
