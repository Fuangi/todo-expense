import Button from "../../utils/Button";

function ServiceCard({ svcName, desc1, desc2, svcImg }) {
  return (
    <div className="service-card">
      <img src={svcImg} alt={svcName} className="service-img" />

      <h3>{svcName}</h3>
      <p>{desc1}</p>
      <p>{desc2}</p>
      <Button content="Explore this feature" className="service-btn" />
    </div>
  );
}

export default ServiceCard;
