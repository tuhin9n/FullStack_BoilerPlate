import React, { useState, useEffect } from "react";
import './App.css';



export default function Index() {
    var [studentList, setStudentList] = useState([]);
    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = () => {
        fetch("http://localhost:9000/students")
            .then(res => res.json())
            .then(res => setStudentList(res));
    }
    return (
        <React.Fragment>
            <div>
                <table id="students">
                    <tbody>
                        <tr>
                            <th>Student Id</th>
                            <th>Name</th>
                            <th>Joining Date</th>
                        </tr>
                        {
                            studentList.data && studentList.data.length > 0 && studentList.data.map((eachStudent, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{eachStudent.id}</td>
                                        <td>{eachStudent.name}</td>
                                        <td>{new Date(eachStudent.joiningDate).toDateString()}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}