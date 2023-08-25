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
    console.log(studentList);
    return (
        <React.Fragment>
            <div>
                <table id="students">
                    <tr>
                        <th>Student Id</th>
                        <th>Name</th>
                        <th>Joining Date</th>
                    </tr>
                    {
                        studentList.data && studentList.data.length > 0 && studentList.data.map(eachStudent => {
                            return (
                                <tr>
                                    <td>{eachStudent.id}</td>
                                    <td>{eachStudent.name}</td>
                                    <td>{new Date(eachStudent.joiningDate).toDateString()}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </React.Fragment>
    )
}