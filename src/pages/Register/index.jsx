import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../configs/Redux/Auth/action";
import { clearMessage } from "../../configs/Redux/Message/action";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    const isSuccess = this.props.status === "ok" ? true : false;
    // console.log(isSuccess);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: isSuccess,
      isLoading: false,
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      successful: false,
      isLoading: true,
    });

    this.props
      .dispatch(
        register(this.state.username, this.state.email, this.state.password)
      )
      .then(() => {
        this.setState({
          successful: true,
          isLoading: false,
        });
        this.props.history.push("/login");
      })
      .catch(() => {
        this.setState({
          successful: false,
          isLoading: false,
        });
      });
  }

  render() {
    const { message } = this.props;

    return (
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="container w-50">
          <div className="card card-container position-relative">
            <div className="card-header">Sign Up to Access This WebApp!</div>
            <form onSubmit={this.handleRegister}>
              {!this.state.successful && (
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      required
                    />
                  </div>
                  {this.state.isLoading ? (
                    <button className="btn-disabled w-100">
                      <div className="loader"></div>
                      REGISTER ...
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-block w-100">
                      REGISTER
                    </button>
                  )}
                </div>
              )}

              {message && (
                <div className="form-group position-absolute bottom-100 w-100">
                  <div
                    className={
                      this.state.successful
                        ? "alert alert-success"
                        : "alert alert-danger"
                    }
                    role="alert"
                  >
                    {message}
                  </div>
                </div>
              )}
              <div
                className="form-footer"
                style={{ justifyContent: "flex-end" }}
              >
                <span
                  onClick={() => {
                    this.props.dispatch(clearMessage());
                    this.props.history.push("/login");
                  }}
                >
                  or you can Sign In here if you had an account
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { message, status } = state.message;
  return {
    message,
    status,
  };
}

export default connect(mapStateToProps)(Register);
