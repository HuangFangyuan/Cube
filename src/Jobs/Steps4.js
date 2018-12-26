import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Button,
  Select,
  Icon,
  Radio,
  Checkbox,
  Row,
  Col
} from "antd";

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const ButtonGroup = Button.Group;

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

class Steps4 extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const { handlePrevious, handleNext } = this.props;
    const { getFieldDecorator } = this.props.form;
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
    return (
      <React.Fragment>
        <FormItem {...formItemLayout} label="Notification">
          {getFieldDecorator("report")(
            <Checkbox.Group onChange={onChange}>
              <Checkbox value="restful">Restful Service</Checkbox>
              <Checkbox value="cach">Cache Data</Checkbox>
            </Checkbox.Group>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Message Update">
          {getFieldDecorator("topic", {
            rules: [
              {
                required: true,
                message: "Please input valid value",
                whitespace: true
              }
            ]
          })(<Input placeholder="Kafka Topic" />)}
        </FormItem>
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
              Submit
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </FormItem>
      </React.Fragment>
    );
  }
}

export default Form.create()(Steps4);
