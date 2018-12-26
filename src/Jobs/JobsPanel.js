import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Select } from "antd";

import { Steps } from "antd";
import Steps0 from "./Steps0";
import Steps1 from "./Steps1";
import Steps2 from './Steps2';
import Steps3 from './Steps3';
import Steps4 from './Steps4';

const Step = Steps.Step;

export class JobsPanel extends Component {
  static propTypes = {};

  state = {
    current: 0
  };

  handlePrevious() {
    this.setState(prevState => ({
      current: --prevState.current
    }));
  }

  handleNext() {
    this.setState(prevState => ({
      current: ++prevState.current
    }));
  }

  commonProps = {
    handleNext: this.handleNext.bind(this),
    handlePrevious: this.handlePrevious.bind(this),
  }

  components = [
    <Steps0 {...this.commonProps} />,
    <Steps1 {...this.commonProps} />,
    <Steps2 {...this.commonProps} />,
    <Steps3 {...this.commonProps} />,
    <Steps4 {...this.commonProps} />,
  ];

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { current } = this.state;
    const formPanel = this.components[current];
    return (
      <div>
        <Steps current={current}>
          <Step />
          <Step />
          <Step />
          <Step />
          <Step />
        </Steps>
        <Form className="db-db-form" style={{ padding: '24px'}} onSubmit={this.handleSubmit}>
          {formPanel}
        </Form>
      </div>
    );
  }
}

export default JobsPanel;
