/* eslint-disable react/prop-types */
// StudentList.js

import Student from './Student';

const StudentList = ({ students }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Task 1</th>
            <th>Task 2</th>
            <th>Task 3</th>
            <th>Task 4</th>
            <th>Task 5</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={student.id} student={student} serialNumber={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
