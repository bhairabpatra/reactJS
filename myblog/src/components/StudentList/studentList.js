import React, {Component} from 'react';
import './studentList.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as studentListActions from "../../store/studentList/actions";
export default class studentList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-student-list">Hello! component studentList</div>;
    }
  }
// export default connect(
//     ({ studentList }) => ({ ...studentList }),
//     dispatch => bindActionCreators({ ...studentListActions }, dispatch)
//   )( studentList );