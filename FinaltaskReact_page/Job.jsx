import { Link } from "react-router-dom";
import useFetchJobs from "../FinaltaskReact_hook/useFetchJobs";

function Job() {

  const jobs = useFetchJobs(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="container">

      <h2>Available Jobs</h2>

      {jobs.map((job) => (

        <div
          key={job.id}
          className="job-card"
        >
          <h3>{job.name}</h3>

          <p>{job.email}</p>

          <Link
            to={`/jobs/${job.id}`}
            className="btn"
          >
            View Details
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Job;