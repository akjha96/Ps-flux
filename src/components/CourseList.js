import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>
              <h5>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </h5>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CourseList.PropType = {
  courses: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      title: PropType.string.isRequired,
      authorId: PropType.number.isRequired,
      category: PropType.string.isRequired,
    })
  ).isRequired,
};

export default CourseList;
