import React, { useState, useEffect } from "react";

export default function Index() {
    var [studentList, setStudentList] = useState([]);
    var [isAdminControlsEnabled, setAdminControls] = useState(false);
    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = () => {
        fetch("http://localhost:9000/students")
            .then(res => res.json())
            .then(res => setStudentList(res));
    }

    const toggleAdminControls = () => {
        setAdminControls(!isAdminControlsEnabled);
    }

    console.log("Hit Index Page", studentList);
    return (
        <React.Fragment>
            <div className="d-flex rowLnHt pd-10">
                <div className="btn-common">Add Student</div>
                <div className="flex-one"></div>
                <div className="btn-admin" onClick={() => toggleAdminControls()}>{isAdminControlsEnabled ? "Disable " : "Enable "} Admin Actions</div>
            </div>
            <div id="table-header" className="d-flex table-header">
                <div className="flex-one txt-center">Student Id</div>
                <div className="flex-one txt-center">Name</div>
                <div className="flex-one txt-center">Joining Date</div>
            </div>
            {
                studentList.data && studentList.data.length > 0 && studentList.data.map((eachStudent, i) => {
                    return (
                        <div id="eachRow" className="d-flex rowLnHt alternate-rows">
                            <div className="flex-one txt-center">{eachStudent.id}</div>
                            <div className="flex-one txt-center">{eachStudent.name}</div>
                            <div className="flex-one txt-center">{new Date(eachStudent.joiningDate).toDateString()}</div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}