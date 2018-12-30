import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import history from "Utils/history";
import CreditCardInput from "react-credit-card-input";
import { Form, Input, Checkbox, Button, Card } from "antd";

import "./PageOne.scss";

const FormItem = Form.Item;

class PageOne extends Component {
  constructor(props) {
    super(props);

    this.state = { cardNumber: "" };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        history.push("/pageTwo");
      }
    });
  };

  handleCardNumberChange = e => {
    this.setState({ cardNumber: e.target.value });
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
          <FormItem {...formItemLayout} label="CARD NUMBER">
            {getFieldDecorator("cardNumber", {
              rules: [
                {
                  required: true,
                  message: "Please input card number!",
                  whitespace: true
                }
              ]
            })(
              <CreditCardInput
                cardNumberInputProps={{
                  value: this.state.cardNumber,
                  onChange: this.handleCardNumberChange
                }}
                fieldClassName="input"
              />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="PIN">
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
              Next
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const PageOneForm = Form.create()(PageOne);
export default withRouter(PageOneForm);
