import React from "react";

const StudentList = ({ students, onDelete, onUpdate }) => {    

    return (
        <div className="student-table">
            <h3>Student Record Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>St. ID</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th colSpan={2}>Action</th>                                
                    </tr>
                </thead>
                <tbody>           
                    {students.map((student, stId) => (
                        <tr key={stId}>
                            <td>{student.stId}</td>
                            <td>{student.name}</td>
                            <td>{student.score}</td>
                            <td>{student.grade}</td>
                            <td className="action" onClick={() => onUpdate(stId, student)}>Edit</td>
                            <td className="action" onClick={() => onDelete(stId)}>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>           
    );
};

export default StudentList;