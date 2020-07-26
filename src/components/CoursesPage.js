import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const fetchData = () => {
    getCourses().then((_courses) => setCourses(_courses));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h3>Courses</h3>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
};

export default CoursesPage;
