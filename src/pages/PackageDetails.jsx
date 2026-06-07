import { useParams } from "react-router-dom";

function PackageDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Package Details</h1>
      <p>You are viewing package ID: {id}</p>
    <div style={{margin:"30px"}}></div>

      <div className="info-card">
        🌍 Full travel details will be shown here  
        ✈ Flight info  
        🏨 Hotel info  
        🚖 Transport info  
      </div>
    </div>
  );
}

export default PackageDetails;
