import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Input, Button, Card, message } from "antd";

import { changeUserCardNo, changeUserPinNo } from "Actions/atmActions";

import history from "Utils/history";
import CreditCardInput from "react-credit-card-input";

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
        let isValid = this.validateInputFields(values);
        if (!isValid) {
          return false;
        }
        console.log("Received values of form: ", values, this.state);
        history.push("/pageTwo");
      }
    });
  };

  validateInputFields = values => {
    const { cardNumber, pin } = values;
    let crdRep = Number(cardNumber.replace(/ +/g, ""));
    console.log(values, this.props);
    if (crdRep !== this.props.cardNumber) {
      message.error("Invalid Card number");
      return false;
    }
    if (Number(pin) !== this.props.pin) {
      message.error("Invalid PIN");
      return false;
    }
    return true;
  };

  handleCardNumberChange = e => {
    this.props.changeUserCardNo(e.target.value);
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
      <Card title="Page One" className="pre-login-card">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="CARD NUMBER">
            {getFieldDecorator("cardNumber", {
              initialValue: this.props.userCardNo,
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
                  value: this.props.userCardNo,
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
            })(<Input type="password" />)}
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

const mapStateToProps = ({ atmReducer }) => {
  const { cardNumber, pin, userCardNo, userPin } = atmReducer;
  return { cardNumber, pin, userCardNo, userPin };
};

const PageOneForm = Form.create()(PageOne);
export default withRouter(
  connect(
    mapStateToProps,
    { changeUserCardNo, changeUserPinNo }
  )(PageOneForm)
);
