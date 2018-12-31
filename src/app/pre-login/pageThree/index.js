import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Button, Card } from "antd";

import history from "Utils/history";

import "./PageOne.scss";

const FormItem = Form.Item;

class PageThree extends Component {
  constructor(props) {
    super(props);
    if (this.props.deductedAmount < 500) {
      history.push("/");
    }
  }

  withdrawMore = () => {
    history.push("/");
  };

  render() {
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
      <Card title="Summary" className="pre-login-card">
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Amount Debited">
            {`Rs. ${this.props.deductedAmount}/-`}
          </FormItem>
          <FormItem {...formItemLayout} label="Remaining Balance">
            {`Rs. ${this.props.balance}/-`}
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" onClick={this.withdrawMore}>
              Withdraw More
            </Button>
          </FormItem>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = ({ atmReducer }) => {
  const { balance, deductedAmount } = atmReducer;
  return { balance, deductedAmount };
};

const PageThreeForm = Form.create()(PageThree);
export default withRouter(connect(mapStateToProps)(PageThreeForm));
