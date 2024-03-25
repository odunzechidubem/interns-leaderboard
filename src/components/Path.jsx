/* eslint-disable react/prop-types */
// Path.js

import StudentList from './StudentList';

const Path = ({ path, togglePath }) => {
  const { name, students, isOpen } = path;

  return (
    <div>
      <h2 onClick={() => togglePath(path.id)}>{name}</h2>
      {isOpen && (
        <StudentList students={students} />
      )}
    </div>
  );
};

export default Path;
