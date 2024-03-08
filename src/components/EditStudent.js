import React, { useState } from "react";

const EditStudent = ({ student, onUpdate }) => {
    const [stId, setStId] = useState(student.stId);
    const [name, setName] = useState(student.name);
    const [score, setScore] = useState(student.score);
    const [grade, setGrade] = useState(student.grade);
         
    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdate({ ...student, stId, name, score, grade });
    };

    return (
        <div className="record-form">
            <form onSubmit={handleSubmit}>
                <h3>Student Edit Record</h3>
                <p>
                    <input
                        type="text"
                        name="stId"
                        placeholder="Student ID"
                        value={stId}
                        onChange={(e) => setStId(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        name="score"
                        placeholder="Score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="grade"
                        placeholder="Grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                    />
                </p>
                <p className="edit-btns">
                    <button className="update-btn" type="submit">Update</button>
                </p>
            </form>
        </div>
    );
}

export default EditStudent;
