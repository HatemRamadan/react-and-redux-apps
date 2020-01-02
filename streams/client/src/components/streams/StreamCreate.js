import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input}></input>
      </div>
    );
  }

  onSubmit(formValues) {}
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
        <button type="submit" className="ui button primary"></button>
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate"
})(StreamCreate);
