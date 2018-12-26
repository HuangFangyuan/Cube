import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Menu } from 'antd';

export default class AsideTab extends Component {
  // static propTypes = {
  //   common: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  callback(key) {
    console.log(key);
  }

  render() {
    return (
      <aside className="common-aside-tab">
        <Menu
          mode="inline"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Citi Velocity</Menu.Item>
          <Menu.Item key="2">TPS Daily</Menu.Item>
          <Menu.Item key="3">TPS Cash</Menu.Item>
        </Menu>
      </aside>
    );
  }
}
