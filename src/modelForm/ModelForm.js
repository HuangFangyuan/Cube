import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import * as actions from './redux/actions';
import { Form, Input, Button, Select } from 'antd';

const FormItem = Form.Item;
const ButtonGroup = Button.Group;
const Option = Select.Option;
const { TextArea } = Input;

class ModelForm extends Component {
  // static propTypes = {
  //   db: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired,
  // };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const { getFieldDecorator } = this.props.form;

    return (
      <Form className="db-db-form" onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input name', whitespace: true }],
          })(<Input placeholder="Citi Trade Data" />)}
        </FormItem>
        
        <FormItem {...formItemLayout} label="SQL">
          {getFieldDecorator('sql', {
            rules: [{ required: true, message: 'Please input name', whitespace: true }],
          })(<TextArea placeholder="select * ..." autosize={{ minRows: 2, maxRows: 6 }} />)}
        </FormItem>
        
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button type="primary" htmlType="submit">
              OK
            </Button>
          </ButtonGroup>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ModelForm);
