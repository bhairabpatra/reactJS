import React, {Component} from 'react';
import './signup.scss'
 
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as signupActions from "../../store/signup/actions";
export default class signup extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return (
      <div className="component-signup">
        <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
          
                </p>
            </form>
      </div>
      );
    }
  }
// export default connect(
//     ({ signup }) => ({ ...signup }),
//     dispatch => bindActionCreators({ ...signupActions }, dispatch)
//   )( signup );