# Using Rest Services


## Update your json file and add job descriptions 

```json
 {
  "products": [
    . . .
  ],
  "jobs": [
    {
      "id": 1,
      "description": "Java Developers And Wizards",
      "experience": "More than 2 years of experience",
      "jobtype": "Full-time"
    },
    {
      "id": 2,
      "description": "Cloud Native Developer",
      "experience": "More than 3 years of experience",
      "jobtype": "Full-time"
    },
    {
      "id": 3,
      "description": "Software Test Engineer",
      "experience": "More than 2 years of experience",
      "jobtype": "Part-time"
    },
    {
      "id": 4,
      "description": "Business Analyst",
      "experience": "More than 1 year of experience",
      "jobtype": "Part-time"
    }
  ]
}
```

- open a terminal window and type `json-server --watch products.json`
- Your fake  server will be started. If you see that information on the screen, you can make rest requests to the server
  
```json

  Loading products.json
  Done

  Resources
  http://localhost:3000/products
  http://localhost:3000/jobs

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

- Try following URLs:
  - [http://localhost:3000/jobs](http://localhost:3000/jobs)
  - [http://localhost:3000/jobs/1](http://localhost:3000/jobs/1)
  
## Using the State Hook

- Create a file named Button.js in the components folder:

**Button.js**
```
import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("How are you?");

  return (
    <button onClick={() => setButtonText("I am fine, thank you :-)")}>
      {buttonText}
    </button>
  );
}
```

- Call your new component from Home component

```
import Button from '../../components/Button'
```

```
 render() {
    return (
      <div className="App">
        . . .
        <Button></Button>
      </div>
    );
  }
```

## Using the Effect Hook

- Create a new component named Job in the components folder.

**Job.js**
```
import React, { useState, useEffect } from "react";
import axios from 'axios';
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
                </tr>
                {jobs.map((item, index) => {
                    return (
                        <tr key={`job-${index}`}>
                            <td>{item.description}</td>
                            <td>{item.experience}</td>
                            <td>{item.jobtype}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}
export default Job;
```
- Open About component and call Job component

```
import Job from '../../components/Job'
```

```
export default class About extends React.Component {
    render() {
		return 	<div>
		<Heading title="Contact" />
		<Job/>
		</div>
	}
}
```
- Test your changes 
- Use Button component in the Job component

**Job.js**
```
import Button from './Button';

```
add new column definition for the Button component
```
<tr key={`job-${index}`}>
    <td>{item.description}</td>
    <td>{item.experience}</td>
    <td>{item.jobtype}</td>
    <td><Button></Button></td>
</tr>
```
- Test your changes
- Change content of the Button component as shown below:

**Button.js**
```
import React, { useState } from "react";

export default function Button() {
  const [buttonText, setButtonText] = useState("Apply");

  return (
    <button onClick={() => setButtonText("Accepted!")}>
      {buttonText}
    </button>
  );
}
```
- Test your changes
