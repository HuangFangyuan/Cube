import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Form, Button, Icon } from "antd";

const FormItem = Form.Item;
const ButtonGroup = Button.Group;

export class Steps2 extends Component {
  static propTypes = {};

  render() {
    const dataSource = [
      {
        key: "1",
        columnName: "tradeId",
        map: "Trade Id"
      },
      {
        key: "2",
        columnName: "shrtDesc",
        map: "User Short Description"
      }
    ];

    const columns = [
      {
        title: "Query Column",
        dataIndex: "columnName",
        key: "columnName"
      },
      {
        title: "Mapping Column",
        dataIndex: "map",
        key: "map"
      },
    ];

    const {handlePrevious, handleNext} = this.props;

    return (
      <div>
        <Table dataSource={dataSource} columns={columns} />

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
      </div>
    );
  }
}

export default Steps2;
