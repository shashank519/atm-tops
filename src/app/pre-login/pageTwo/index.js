import React, { Component } from "react";
import { Form, Button, Card, message, InputNumber } from "antd";
import { connect } from "react-redux";

import history from "Utils/history";
import { setDeductedAmount } from "Actions/atmActions";
import "./PageTwo.scss";

const FormItem = Form.Item;

class PageTwo extends Component {
  constructor(props) {
    super(props);

    if (!this.props.userCardNo.length) {
      history.push("/");
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (!this.validateWithdrawlAmount(values)) {
          return;
        }
        this.props.setDeductedAmount(values.withdrawAmount);
        history.push("/pageThree");
      }
    });
  };

  validateWithdrawlAmount = values => {
    const { withdrawAmount } = values;
    if (withdrawAmount <= 500 || withdrawAmount >= 50000) {
      message.error(
        "Entered amount is either deceeding or exceeding transaction limit."
      );
      return false;
    }
    if (this.props.balance <= withdrawAmount) {
      message.error("Insuffecient amount in your account");
      return false;
    }
    return true;
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
      <Card
        title="Page Two"
        className="pre-login-reg-card"
        style={{ width: "100%" }}
      >
        <Form className="pl-reg-form" onSubmit={this.handleSubmit}>
          <FormItem {...tailFormItemLayout}>
            <h2>Limit:=> Minimum: 500 rs and maximum: 50,000 rs</h2>
          </FormItem>
          <FormItem {...formItemLayout} label="Withdrawl Amount">
            {getFieldDecorator("withdrawAmount", {
              rules: [
                {
                  required: true,
                  message:
                    "LIMIT: Min 500 Rs. and Max 50,000 Rs./Invalid amount"
                }
              ]
            })(<InputNumber style={{ width: "250px" }} />)}
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
  const { userCardNo, balance } = atmReducer;
  return { userCardNo, balance };
};

const PageTwoForm = Form.create()(PageTwo);

export default connect(
  mapStateToProps,
  { setDeductedAmount }
)(PageTwoForm);
