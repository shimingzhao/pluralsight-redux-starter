import React, { PropTypes } from 'react'
import CourseListRow from './CourseListRow'

const CourseList = ({courses}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
        {/*<th>Oprate</th>*/}
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow
          key={course.id}
          course={course}
          // actions={actions}
        />
      )}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  courses: React.PropTypes.array.isRequired
  // actions: React.PropTypes.object.isRequired,
  // onDelete: React.PropTypes.func.isRequired
}

export default CourseList
