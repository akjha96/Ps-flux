import React from "react";
import TextInput from "./common/TextInput";
const CourseForm = ({ course, onChange, onSubmitData }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmitData}>
      <TextInput onChange={onChange} label="Title" id="title" name="title" value={course.title} />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select onChange={onChange} id="author" name="authorId" value={course.author} className="form-control">
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
      </div>

      <TextInput onChange={onChange} label="Category" id="category" name="category" value={course.category} />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

export default CourseForm;
