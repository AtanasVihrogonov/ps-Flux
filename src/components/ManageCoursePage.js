import React, { useState } from 'react';
import CourseForm from './CourseForm';

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  function handleChange(e) {
    const updatedCourse = { ...course, [e.target.name]: e.target.value };
    setCourse(updatedCourse);
  }

  return (
    <div>
      <h2>Manage Course</h2>
      <CourseForm course={course} onChange={handleChange} />
    </div>
  );
};

export default ManageCoursePage;
