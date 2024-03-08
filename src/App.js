import React, { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import "./App.css";

const App = () => {
    const [students, setStudents] = useState([]);
    const [editStudent, setEditStudent] = useState(null);
    
    const storeStudents = JSON.parse(localStorage.getItem('students'));

    useEffect(() => {
        if (storeStudents == null) {
            setStudents([]);
        } else {
            setStudents(storeStudents);
        }
        // eslint-disable-next-line
    }, []);

    const addStudent = (student) => {
        setStudents([...students, student]);
        localStorage.setItem('students', JSON.stringify([...students, student]));
    };
    
    const deleteStudent = (stId) => {
        setStudents(students.filter((_, i) => i !== stId));
        localStorage.setItem('students', JSON.stringify(students));
    };

    const updateStudent = (stId, student) => {
        setEditStudent(student);
        setStudents(students.filter((_, i) => i !== stId));
        localStorage.setItem('students', JSON.stringify(students));
    };

    const saveUpdate = (student) => {
        setStudents([...students, student]);
        setEditStudent(null);
    }

    return (
        <div className="App">
            <IntroPage />
            <div className="records">
                {editStudent ? (
                    <EditStudent 
                        student={editStudent}
                        onUpdate={saveUpdate}
                    />
                ) : (
                    <div>
                        <AddStudent onAdd={addStudent} />
                    </div>
                )}             
                <div>
                    <StudentList 
                        students={students}
                        onDelete={deleteStudent}
                        onUpdate={updateStudent}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
