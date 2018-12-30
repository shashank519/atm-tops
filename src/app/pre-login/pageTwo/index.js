import React, { Component } from "react";
import { Form, Input, Button, Card } from "antd";
import history from "Utils/history";
import "./PageTwo.scss";

const FormItem = Form.Item;

class PageTwo extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        history.push("/pageThree");
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
      <Card
        title="Register"
        className="pre-login-reg-card"
        style={{ width: "100%" }}
      >
        <Form className="pl-reg-form" onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="Withdrawl Amount">
            {getFieldDecorator("withdrawAmount", {
              rules: [
                {
                  required: true,
                  message: "Please input amount to withdraw!",
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

const PageTwoForm = Form.create()(PageTwo);

export default PageTwoForm;
