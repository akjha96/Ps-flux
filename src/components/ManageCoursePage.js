import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../api/courseApi";
import { toast } from "react-toastify";

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: "",
  });

  const handleChange = (event) => {
    const updatedCourse = { ...course, [event.target.name]: event.target.value };
    setCourse(updatedCourse);
  };

  const handleSubmilt = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved!");
    });
  };

  return (
    <>
      <h2>Manage Course</h2>
      <CourseForm onChange={handleChange} course={course} onSubmitData={handleSubmilt} />
    </>
  );
};

export default ManageCoursePage;
