import React, { useState, useEffect } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/students');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  if (loading) {
    return <div className="text-white text-center">Loading student data...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return (
    <div className="w-full">
      {students.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {students.map((student) => (
            <div key={student._id} className="bg-gray-800 p-4 rounded-lg shadow-md w-full max-w-sm">
              <h3 className="text-white font-bold text-lg">Name: {student.name}</h3>
              <p className="text-gray-400 text-sm">Roll No: {student.roll_no}</p>
              <p className="text-gray-400 text-sm">Branch: {student.branch}</p>
              <p className="text-gray-400 text-sm">Year: {student.year}</p>
              <p className="text-gray-400 text-sm">Email: {student.email}</p>
              <p className="text-gray-400 text-sm">Contact: {student.contact}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white text-center">No student data found.</p>
      )}
    </div>
  );
};

export default StudentList;