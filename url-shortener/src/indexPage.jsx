import React, { useState, useEffect } from "react";



export default function Index() {
    var [apiResponse, setApiResponse] = useState('');
    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setApiResponse(res));
    }
    return (
        <React.Fragment>
            <div>{apiResponse}</div>
        </React.Fragment>
    )
}