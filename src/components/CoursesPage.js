import React, { useState, useEffect } from "react";
import courseStore from "../store/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";

const CoursesPage = () => {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount
  }, []);

  const onChange = () => {
    setCourses(courseStore.getCourses());
  };

  return (
    <>
      <h3>Courses</h3>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
};

export default CoursesPage;
