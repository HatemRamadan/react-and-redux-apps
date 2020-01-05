import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";
class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input}></input>
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        ></Field>
        <Field
          name="desc"
          component={this.renderInput}
          label="Enter Description"
        ></Field>
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}

export default connect(null, { createStream })(
  reduxForm({
    form: "streamCreate"
  })(StreamCreate)
);
