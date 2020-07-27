import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

const CourseForm = ({ course, onChange, onSubmitData, errors }) => {
  return (
    <form autoComplete="off" onSubmit={onSubmitData}>
      <TextInput onChange={onChange} label="Title" id="title" name="title" value={course.title} error={errors.title} />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select onChange={onChange} id="author" name="authorId" value={course.authorId} className="form-control">
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {errors.authorId && <div className="alert alert-danger">{errors.authorId}</div>}
      </div>

      <TextInput onChange={onChange} label="Category" id="category" name="category" value={course.category} error={errors.category} />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default CourseForm;
