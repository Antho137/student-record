import React, { useState } from "react";

const AddStudent = ({ onAdd }) => {
    const [stId, setStId] = useState('');
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [grade, setGrade] = useState('');
         
    const handleSubmit = (event) => {
        event.preventDefault();
        const student = { stId, name, score, grade };
        onAdd(student);
        setStId('');
        setName('');
        setScore('');
        setGrade('');
    };

    return (
        <div className="record-form">
            <form onSubmit={handleSubmit}>
                <h3>Student Record Form</h3>
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
                <p>
                    <button className="submit-btn" type="submit">Add Student</button>
                </p>
            </form>
        </div>
    );
}

export default AddStudent;
