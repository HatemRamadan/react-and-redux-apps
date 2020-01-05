import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () =>
      window.gapi.client
        .init({
          clientId:
            "342068308292-cplrfsg7qkfk022hql2rp6ujvm2eilp4.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
    );
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else this.props.signOut();
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };
  render() {
    if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon">Sign Out+{this.props.userId}</i>
        </button>
      );
    else
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon">Sign In</i>
        </button>
      );
  }
}
const mapStateToProps = state => {
  return {
    isSignedIn: state.authReducer.isSignedIn,
    userId: state.authReducer.userId
  };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
