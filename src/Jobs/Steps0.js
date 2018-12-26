import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Select, Icon } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

class Steps0 extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };

    const { getFieldDecorator } = this.props.form;
    const { handleNext } = this.props;

    return (
      <React.Fragment>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("name", {
            rules: [
              { required: true, message: "Please input name", whitespace: true }
            ]
          })(<Input placeholder="Citi Trade Data" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Model">
          {getFieldDecorator("model", {
            rules: [
              {
                required: true,
                message: "Please input model",
                whitespace: true
              }
            ]
          })(
            <Select style={{ width: 120 }} onChange={this.handleChange}>
              <Option value="Model1">Model1</Option>
              <Option value="Model2">Model2</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator("description", {
            rules: [
              { required: true, message: "Please input name", whitespace: true }
            ]
          })(
            <TextArea
              placeholder="This is a description for something"
              autosize={{ minRows: 2, maxRows: 6 }}
            />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 }
          }}
        >
          <Button type="primary" onClick={handleNext}>
            Go forward
            <Icon type="right" />
          </Button>
        </FormItem>
      </React.Fragment>
    );
  }
}

export default Form.create()(Steps0);
