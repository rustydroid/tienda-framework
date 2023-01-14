import { Link } from "react-router-dom";
function ItemCard({ id, name, image, category }) {
  return (
    <div key={id} className="card mb-3" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top img-fluid" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <Link className="btn btn-primary" to={ `/item/${category}/${id}` }>
          Detalles

        </Link>
      </div>
    </div>
  );
}

export default ItemCard;
