import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators } from 'redux';

class CoursesPage extends React.Component {

  constructor (props, context) {
    super(props, context)
    this.state = {
      course: {title: ''}
    }
  }

  onTitleChange (event) {
    const course = this.state.course
    course.title = event.target.value
    this.setState({course: course})
  }

  onClickSave(event){
    this.props.dispatch(courseActions.createCourse(this.state.course))
  }

  courseRow(course, index){
    return <div key={index}>{course.title}</div>
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={(e) => this.onTitleChange(e)} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={(e) => this.onClickSave(e)}/>
      </div>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  // course: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage)
