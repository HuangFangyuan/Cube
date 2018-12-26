import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import AsideTab from './asideTab/AsideTab';
import DbForm from './dbForm/DbForm';
import ModelForm from './modelForm/ModelForm';

import 'antd/dist/antd.css';

const { Header, Content, Sider } = Layout;

export default class CommonPanel extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: '',
  };

  render() {
    return (
     
          <Layout>
            <Sider width={300} style={{ background: '#fff' }}>
              <AsideTab />
            </Sider>
            <Layout style={{ padding: '0 24px 24px', background: '#fff' }}>
              <Content
                style={{
                  background: '#fff',
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
    );
  }
}
