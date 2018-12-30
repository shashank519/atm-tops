import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Form, Input, Button, Card } from "antd";

import "./PageOne.scss";

const FormItem = Form.Item;

class PageThree extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Card title="Login" className="pre-login-card">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Amount Debited">
            {getFieldDecorator("cardNumber", {
              rules: [
                {
                  required: true,
                  message: "Please input card number!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem {...formItemLayout} label="Total Balance">
            {getFieldDecorator("pin", {
              rules: [
                {
                  required: true,
                  message: "Please input pin!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Withdraw More
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const PageThreeForm = Form.create()(PageThree);
export default withRouter(PageThreeForm);
