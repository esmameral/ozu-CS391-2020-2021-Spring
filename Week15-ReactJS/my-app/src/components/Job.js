import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from './Button'
const api = axios.create({
    baseURL: `http://localhost:3000/jobs`,
    timeout: 1000
});
const Job = () => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        api.get('/').then(res => {
            setJobs(res.data);
        })
    }, []);
    return (
        <div>
            <h2>Open Jobs</h2>
            <table>
                <tr>
                    <th>Job Description</th>
                    <th>Years of Experience</th>
                    <th>Job Type</th>
                    <th>Operation</th>
                </tr>
                {jobs.map((item, index) => {
                    return (
                        <tr key={`job-${index}`}>
                            <td>{item.description}</td>
                            <td>{item.experience}</td>
                            <td>{item.jobtype}</td>
                            <td><Button></Button></td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
export default Job;