import { useNavigate } from "react-router-dom";

function PackageCard({ id, title, image, price }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <h4>₹{price}</h4>

      <button onClick={() => navigate(`/package/${id}`)}>
        View Page
      </button>
    </div>
  );
}

export default PackageCard;