import React, {Component} from 'react';
import './editStdent.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as editStdentActions from "../../store/editStdent/actions";
export default class editStdent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-edit-stdent">Hello! component editStdent</div>;
    }
  }
// export default connect(
//     ({ editStdent }) => ({ ...editStdent }),
//     dispatch => bindActionCreators({ ...editStdentActions }, dispatch)
//   )( editStdent );