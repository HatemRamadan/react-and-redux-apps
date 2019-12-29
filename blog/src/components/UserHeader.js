import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  componentDidMount() {}
  render() {
    const { user } = this.props;
    if (user) return <div>{user.name}</div>;
    else return <div>loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};
export default connect(mapStateToProps)(UserHeader);