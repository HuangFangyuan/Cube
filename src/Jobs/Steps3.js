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

class Steps3 extends Component {
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
        <FormItem label="Report">
          {getFieldDecorator("report")(
            <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
              <Row>
                <Col span={8}>
                  <Checkbox value="plainText">Plain Text</Checkbox>
                </Col>
              </Row>
              <Row>
                <Checkbox value="csv">Simple CSV Report</Checkbox>
              </Row>
              <Row>
                <Checkbox value="A">
                  <Select
                    style={{ width: 300 }}
                    placeholder="Jasper Report Template"
                    onChange={this.handleChange}
                  >
                    <Option value="Model1">Model1</Option>
                    <Option value="Model2">Model2</Option>
                  </Select>
                </Checkbox>
              </Row>
              <Row>
                <Checkbox value="html">Html</Checkbox>
                <Checkbox value="pdf">Pdf</Checkbox>
                <Checkbox value="xlsx">Xlsx</Checkbox>
              </Row>
            </Checkbox.Group>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Notification Alias">
          {getFieldDecorator("alias", {
            rules: [
              {
                required: true,
                message: "Please input valid value",
                whitespace: true
              }
            ]
          })(<Input placeholder="*GT Some Group" />)}
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
              Go forward
              <Icon type="right" />
            </Button>
          </ButtonGroup>
        </FormItem>
      </React.Fragment>
    );
  }
}

export default Form.create()(Steps3);
