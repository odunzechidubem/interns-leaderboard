/* eslint-disable react/prop-types */
// Student.js


const Student = ({ student, serialNumber }) => {
  const { firstName, lastName, task, image } = student;
  const total = task.reduce((acc, val) => acc + val, 0);

  return (
    <tr>
      <td>{serialNumber}</td>
      <td>
        <div className="student-info">
          <img src={image} alt={`${firstName} ${lastName}`} className="student-image" />
          <div>
            <p>{`${firstName} ${lastName}`}</p>
          </div>
        </div>
      </td>
      {task.map((score, index) => (
        <td key={index}>{score}</td>
      ))}
      <td>{total}</td>
    </tr>
  );
};

export default Student;
