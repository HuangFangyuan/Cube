import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Select, Icon, Radio } from "antd";

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const ButtonGroup = Button.Group;

class Steps1 extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { handlePrevious, handleNext } = this.props;
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
      margin: "20px"
    };

    return (
      <React.Fragment>
        <h4>Refresh</h4>
        <RadioGroup name="radiogroup">
          <Radio style={radioStyle} value={1}>
            <Select
              style={{ width: 120 }}
              placeholder="Every hours"
              onChange={this.handleChange}
            >
              <Option value="Model1">Model1</Option>
              <Option value="Model2">Model2</Option>
            </Select>
          </Radio>
          <Radio style={radioStyle} value={2}>
            <Input placeholder="Cron Expression" />
          </Radio>
          <Radio style={radioStyle} value={3}>
            <Select
              style={{ width: 120 }}
              placeholder="DB"
              onChange={this.handleChange}
            >
              <Option value="Model1">Model1</Option>
              <Option value="Model2">Model2</Option>
            </Select>
            <Select
              style={{ width: 120 }}
              placeholder="Table"
              onChange={this.handleChange}
            >
              <Option value="Model1">Model1</Option>
              <Option value="Model2">Model2</Option>
            </Select>
            <Select
              style={{ width: 120 }}
              placeholder="Field"
              onChange={this.handleChange}
            >
              <Option value="Model1">Model1</Option>
              <Option value="Model2">Model2</Option>
            </Select>
          </Radio>
        </RadioGroup>

        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <ButtonGroup>
            <Button type="primary" onClick={handlePrevious}>
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary" onClick={handleNext}>
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </FormItem>
      </React.Fragment>
    );
  }
}

export default Form.create()(Steps1);
