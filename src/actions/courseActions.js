import dispatcher from "../appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";

export const saveCourse = (course) => {
  return courseApi.saveCourse(course).then((savedCourse) => {
    // Hey Dispatcher, go tell all the stores that a course was just created
    dispatcher.dispatch({
      actionType: course.id ? actionTypes.UPDATE_COURSE : actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
};

export const loadCourses = () => {
  return courseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
};

export const deleteCourse = (id) => {
  return courseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSES,
      id: id,
    });
    toast.error("Course Deleted!");
  });
};
